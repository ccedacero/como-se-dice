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
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(5),
  },
  fomrTopSpace: {
    marginTop: "15vh",
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

export const Quiz = ({
  match: {
    params: { id },
  },
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
  });
  const [results, setResults] = useState({
    no_correct: 0,
    no_incorrect: 0,
    incorrectQ: [],
    incCategory: id,
  });

  useEffect(() => {
    fetch("http://localhost:3000/questions", payLoad)
      .then((r) => r.json())
      .then((quizQuestionsObj) => {
        setState(quizQuestionsObj);
        setQuestion({
          currentQuestion: 0,
          question: quizQuestionsObj[0].question,
          Option1: quizQuestionsObj[0].answers[0].answer,
          Option2: quizQuestionsObj[0].answers[1].answer,
          Option3: quizQuestionsObj[0].answers[2].answer,
          Option4: quizQuestionsObj[0].answers[3].answer,
        });
      });
  }, []);

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
  const setCurrentQuestion = () => {
    setResults((prevState) => {
      return {
        ...prevState,
        incorrectQ: [...results.incorrectQ, question.question],
      };
    });
  };

  const handleSubmit = (event) => {
    console.log(results);
    event.preventDefault();
    if (question.currentQuestion + 1 !== state.length) {
      let comparison = state[question.currentQuestion].answers.find((ans) => {
        if (ans.is_correct !== undefined && ans.is_correct === true) {
          return ans;
        } else {
          setHelperText("Please select an option.");
          setError(true);
          return;
        }
      });
      if (comparison.answer && comparison.answer === value) {
        let arr = shuffle([0, 1, 2, 3]);
        setQuestion((prevState) => {
          return {
            currentQuestion: prevState.currentQuestion + 1,
            question: state[prevState.currentQuestion + 1].question,
            Option1:
              state[prevState.currentQuestion + 1].answers[arr[0]].answer,
            Option2:
              state[prevState.currentQuestion + 1].answers[arr[1]].answer,
            Option3:
              state[prevState.currentQuestion + 1].answers[arr[2]].answer,
            Option4:
              state[prevState.currentQuestion + 1].answers[arr[3]].answer,
          };
        });

        setHelperText("Buen Trabajo!");
        setError(false);
        setCorrectResults();
      } else if (comparison.answer && comparison.answer !== value) {
        setHelperText("Lo Siente, Intente Otra vez!");
        setError(true);
        setIncorrectResults();
        setCurrentQuestion();
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
  };

  return (
    <Container maxWidth="sm">
      <form className={classes.fomrTopSpace} onSubmit={handleSubmit}>
        <FormLabel component="legend">
          <Typography variant="h5" component="h6">
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
              value={question.Option1}
              control={<Radio />}
              label={question.Option1}
            />
            <FormControlLabel
              value={question.Option2}
              control={<Radio />}
              label={question.Option2}
            />
            <FormControlLabel
              value={question.Option3}
              control={<Radio />}
              label={question.Option3}
            />
            <FormControlLabel
              value={question.Option4}
              control={<Radio />}
              label={question.Option4}
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
