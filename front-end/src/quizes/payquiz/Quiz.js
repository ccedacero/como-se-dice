import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { payLoad } from "../../constants/index";
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

export const Quiz = ({
  match: {
    params: { id },
  },
  currentUser,
}) => {
  const classes = useStyles();
  const [state, setState] = useState([]);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("Buena Suerte!");
  const [question, setQuestion] = useState({
    currentQuestion: "",
    question: "",
    Option1: "",
    Option2: "",
    Option3: "",
    Option4: "",
    questionId: "",
  });

  useEffect(() => {
    fetch("http://localhost:3000/questions", payLoad)
      .then((r) => r.json())
      .then((quizQuestionsObj) => {
        setState(quizQuestionsObj);
        setQuestion({
          currentQuestion: 0,
          question: quizQuestionsObj[0].question,
          Option1: quizQuestionsObj[0].answers[0],
          Option2: quizQuestionsObj[0].answers[1],
          Option3: quizQuestionsObj[0].answers[2],
          Option4: quizQuestionsObj[0].answers[3],
          questionId: quizQuestionsObj[0].id,
        });
      });
  }, []);

  const [results, setResults] = useState({
    test_id: 0,
    no_correct: 0,
    no_incorrect: 0,
    user_id: localStorage.user,
    score: 0,
  });
  const [response, setResponse] = useState({
    user_id: localStorage.user,
    question_id: null,
    choice_id: null,
    is_right: null,
  });

  // WE ARE GOING TO FIRST GET THE DASHBORAD TO DISPLAY GENERAL TEST RESULTS

  const getSelectedRadio = (e) => {
    let radioSelection = e.target.value;
    const radioSelected = state[question.currentQuestion].answers.find(
      (ans) => {
        return ans.answer === radioSelection;
      }
    );

    setResponse((prevState) => {
      return {
        ...prevState,
        choice_id: radioSelected.id,
        question_id: state[question.currentQuestion].id,
      };
    });
  };

  // useEffect(() => {
  //   persistResponse();
  // }, [response.is_right]);

  // const setResponseTrue = () => {
  //   setResponse((prevState) => {
  //     return {
  //       ...prevState,
  //       is_right: true,
  //     };
  //   });
  // };

  // const setResponseFalse = () => {
  //   setResponse((prevState) => {
  //     return {
  //       ...prevState,
  //       is_right: false,
  //     };
  //   });
  // };

  const setResponseTrue = () => {
    const sample = {
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
      body: JSON.stringify(sample),
    };
    fetch("http://localhost:3000/user_answers", answerPayLoad)
      .then((r) => r.json())
      .then((persistedObj) => {
        console.log(persistedObj);
      });
  };

  const setResponseFalse = () => {
    const sample = {
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
      body: JSON.stringify(sample),
    };
    fetch("http://localhost:3000/user_answers", answerPayLoad)
      .then((r) => r.json())
      .then((persistedObj) => {
        console.log(persistedObj);
      });
  };

  //  BUG FOUND IN LAST QUESTION RENDER - DOES NOT CHECK CORRECT
  //  ANSWER
  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };

  const handleQuestionChange = () => {
    return (
      state[question.currentQuestion] &&
      state[question.currentQuestion].question
    );
  };

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const setIncorrectResults = () => {
    setResults((prevState) => {
      return {
        ...prevState,
        no_incorrect: prevState.no_incorrect + 1,
      };
    });
  };

  const setCorrectResults = () => {
    setResults((prevState) => {
      return {
        ...prevState,
        no_correct: prevState.no_correct + 1,
      };
    });
  };

  const persistResults = () => {
    const resultObj = {
      ...results,
      test_id: state[0].test.id,
      score: results.no_correct - results.no_incorrect,
    };

    const createPayload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify(resultObj), // body data type must match "Content-Type" header
    };
    fetch("http://localhost:3000/results", createPayload)
      .then((r) => r.json())
      .then((quizQuestionsObj) => {
        console.log(quizQuestionsObj);
      });
  };

  // const persistResponse = () => {
  //   const answerPayLoad = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${localStorage.token}`,
  //     },
  //     body: JSON.stringify(response),
  //   };

  //   fetch("http://localhost:3000/user_answers", answerPayLoad)
  //     .then((r) => r.json())
  //     .then((persistedObj) => {
  //       console.log(persistedObj);
  //     });
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (question.currentQuestion + 1 !== state.length) {
      let comparison = state[question.currentQuestion].answers.find((ans) => {
        if (ans.is_correct !== undefined && ans.is_correct === true) {
          return ans;
        } else {
          setHelperText("Please select an option.");
          setError(true);
          // return;
        }
      });
      if (comparison.answer && comparison.answer === value) {
        setResponseTrue();

        // persistResponse();
        let arr = shuffle([0, 1, 2, 3]);
        setQuestion((prevState) => {
          return {
            currentQuestion: prevState.currentQuestion + 1,
            question: state[prevState.currentQuestion + 1].question,
            Option1: state[prevState.currentQuestion + 1].answers[arr[0]],
            Option2: state[prevState.currentQuestion + 1].answers[arr[1]],
            Option3: state[prevState.currentQuestion + 1].answers[arr[2]],
            Option4: state[prevState.currentQuestion + 1].answers[arr[3]],
          };
        });

        setHelperText("Buen Trabajo!");
        setError(false);
        setCorrectResults();
      } else if (comparison.answer && comparison.answer !== value) {
        setResponseFalse();
        setHelperText("Lo Siento, Intente Otra vez!");
        setError(true);
        setIncorrectResults();
        // persistResponse();
      } else {
        setHelperText("Por favor, seleccione una opcion:");
        setError(true);
      }
    } else {
      setHelperText(
        `Terminaste!Felicidades!, tuviste ${
          results.no_correct - results.no_incorrect
        } preguntas correctas!`
      );
    }
    if (question.currentQuestion + 1 === state.length) {
      persistResults();
    }
  };
  //  setTimeout(persistResponse, 2000);
  return (
    <Container class="radioForm" maxWidth="md">
      <form className={classes.fomrTopSpace} onSubmit={handleSubmit}>
        <FormLabel component="legend">
          <Typography variant="h4" component="h6">
            Prueba / Pop Quiz de Vocabulario de {id}
          </Typography>
        </FormLabel>
        <FormControl
          component="fieldset"
          error={error}
          className={classes.formControl}
        >
          <FormLabel component="legend">{handleQuestionChange()}</FormLabel>
          <RadioGroup
            aria-label="quiz"
            name="quiz"
            value={value}
            onChange={handleRadioChange}
          >
            <FormControlLabel
              value={question.Option1.answer}
              control={<Radio />}
              label={question.Option1.answer}
              onChange={(e) => getSelectedRadio(e)}
            />
            <FormControlLabel
              value={question.Option2.answer}
              control={<Radio />}
              label={question.Option2.answer}
              onChange={(e) => getSelectedRadio(e)}
            />
            <FormControlLabel
              value={question.Option3.answer}
              control={<Radio />}
              label={question.Option3.answer}
              onChange={(e) => getSelectedRadio(e)}
            />
            <FormControlLabel
              value={question.Option4.answer}
              control={<Radio />}
              label={question.Option4.answer}
              onChange={(e) => getSelectedRadio(e)}
            />
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            className={classes.button}
          >
            Check Answer
          </Button>
        </FormControl>
      </form>
    </Container>
  );
};
export default Quiz;
