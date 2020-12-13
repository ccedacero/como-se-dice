import React from "react";
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
  fetchedQuiz,
  question,
  error,
  value,
  handleRadioChange,
  getSelectedRadio,
  helperText,
  handleSubmit }) => {
  const classes = useStyles();

  return (
    <> {fetchedQuiz && (
      <Container class="radioForm" maxWidth="md">
        <form className={classes.fomrTopSpace} onSubmit={handleSubmit}>
          <FormLabel component="legend">
            <Typography variant="h4" component="h6">
              Prueba de Vocabulario de
              <br></br>
            Question:{question + 1} of {fetchedQuiz.length}
            </Typography>
          </FormLabel>
          <FormControl
            component="fieldset"
            error={error}
            className={classes.formControl}
          >
            <FormLabel component="legend">{fetchedQuiz[question].question}</FormLabel>
            <RadioGroup
              aria-label="quiz"
              name="quiz"
              value={value}
              onChange={handleRadioChange}
            >
              {fetchedQuiz[question].answers.map((answer) => {
                return (<FormControlLabel
                  value={answer.answer}
                  control={< Radio />}
                  label={answer.answer}
                  onChange={(e) => getSelectedRadio(e)}
                />)
              }
              )}
            </RadioGroup>
            <FormHelperText>{helperText}</FormHelperText>
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              className={classes.button}
            >
              Revisar Respuesta
          </Button>
          </FormControl>
        </form>
      </Container>)}
    </>
  );
};
export default Quiz;
