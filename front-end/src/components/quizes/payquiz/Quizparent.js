import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Quiz } from "./Quiz";
import "./Quiz.css";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(5),
    },
    fomrTopSpace: {
        marginTop: "5vh",
    },
    button: {
        margin: theme.spacing(1, 1, 0, 0),
    },
}));

export const Quizparent = ({
    match: {
        params: { id },
    },
    history,
}) => {
    const classes = useStyles();
    const [state, setState] = useState(false);
    // this state is used to track the currently selected answer choice on the quiz
    const [value, setValue] = useState("");
    // this state is used to display an error if the selecte answer choice is incorrect
    const [error, setError] = useState(false);
    // this state is used to display helper text for correct and incorrect answers
    const [helperText, setHelperText] = useState("Buena Suerte!");
    // this state is used to set the current question and answer choices
    const [question, setQuestion] = useState(0);

    // this state keeps track of current user response(whether correcr or incorrect)
    // and is used to persist to server
    const [response, setResponse] = useState({
        question_id: null,
        choice_id: null,
    });

    //this state keeps track of quiz results
    const [results, setResults] = useState({
        test_id: 0,
        no_correct: 0,
        no_incorrect: 0,
        user_id: localStorage.user,
        score: 0,
    });

    // fisherYalesShuffle
    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
    // Load the quiz into the state
    useEffect(() => {
        const payLoad = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        };
        fetch(`http://localhost:3000/tests/${id}`, payLoad)
            .then((r) => r.json())
            .then((quizQuestionsObj) => {
                for (let question of quizQuestionsObj) {
                    question.answers = shuffle(question.answers);
                }
                setState(quizQuestionsObj);
            });
    }, []);

    // function to keep track of radio values
    const handleRadioChange = (event) => {
        setValue(event.target.value);
        setHelperText(" ");
        setError(false);
    };
    // helper function to get currently selected answer and set response state
    const getSelectedRadio = (e) => {
        const currentValue = e.target.value;
        const choice = state[question].answers.find((ans) => ans.answer === currentValue)
        setResponse({ choice_id: choice.id, question_id: state[question].id })
    };

    // function to update local incorrect question tracking state
    const setIncorrectResults = () => {
        setResults((prevState) => {
            return {
                ...prevState,
                no_incorrect: prevState.no_incorrect + 1,
            };
        });
    };

    // function to update local correct question tracking state
    const setCorrectResults = () => {
        setResults((prevState) => {
            return {
                ...prevState,
                no_correct: prevState.no_correct + 1,
            };
        });
    };
    // function to persist a correct answer to server
    const persistTrueResponse = () => {
        const trueResponse = {
            user_id: localStorage.user,
            question_id: response.question_id,
            choice_id: response.choice_id,
            is_right: true,
        };
        const answerPayLoad = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.token}`,
            },
            body: JSON.stringify(trueResponse),
        };
        fetch("http://localhost:3000/user_answers", answerPayLoad)
            .then((r) => r.json())
            .then((persistedObj) => {
                console.log(persistedObj);
            });
    };

    // function to persist incorrect response to server
    const persistFalseResponse = () => {
        const selectedResponse = {
            user_id: localStorage.user,
            question_id: response.question_id,
            choice_id: response.choice_id,
            is_right: false,
        };
        const answerPayLoad = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.token}`,
            },
            body: JSON.stringify(selectedResponse),
        };
        fetch("http://localhost:3000/user_answers", answerPayLoad)
            .then((r) => r.json())
            .then((persistedObj) => {
                console.log(persistedObj);
            });
    };

    // persist total quiz results,only run at the end of quiz
    const persistResults = () => {
        const testScore = results.no_correct - results.no_incorrect;
        const resultObj = {
            no_correct: testScore,
            no_incorrect: results.no_correct,
            test_id: state[question].test.id,
            score: testScore,
        };
        const createPayload = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.token}`,
            },
            body: JSON.stringify(resultObj),
        };
        fetch("http://localhost:3000/results", createPayload)
            .then((r) => r.json())
            .then((quizQuestionsObj) => {
                console.log(quizQuestionsObj);
            });
        setTimeout(() => history.push("/pruebas"), 3000);
    };

    // a method to randomize questions for this approach
    const isCorrect = (ans) => {
        return state[question].answers.find((ans) => ans.is_correct === true)
    }
    // main function that combines all quiz logic based on previous questions
    // and whether the answer is correct and incorrect
    const handleSubmit = (event) => {
        event.preventDefault();
        if (question < state.length - 1) {
            const correct = state[question].answers.find((ans) => ans.is_correct).id === response.choice_id;
            if (correct) {
                setHelperText("Buen Trabajo!");
                setCorrectResults();
                persistTrueResponse();
                const nextQuestion = question + 1;
                setQuestion(nextQuestion)
                setHelperText("Por favor, seleccione una opcion:");
            } else if (!correct) {
                setHelperText("Lo Siento, Intente Otra vez!");
                setError(true);
                setIncorrectResults();
                persistFalseResponse();
            }
            setError(false);
            // setHelperText("Please select an option.");
        } else {
            setHelperText(
                `Terminaste!Felicidades!, tuviste ${results.no_correct + 1 - results.no_incorrect
                } preguntas correctas!`
            );
            setTimeout(persistResults, 2000);
        }
    }

    return (
        <Quiz
            fetchedQuiz={state}
            question={question}
            error={error}
            value={value}
            handleRadioChange={handleRadioChange}
            getSelectedRadio={getSelectedRadio}
            helperText={helperText}
            handleSubmit={handleSubmit}
            history={history} />
    )
}