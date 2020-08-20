import React, { useState, setEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Recording from "./EnglishRec";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginTop: "20px",
    marginRight: theme.spacing(1),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  textarea: {
    width: "90%",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(5, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));
export const Translator = () => {
  const classes = useStyles();

  const [text, setText] = useState("");
  const [translated, setTranslated] = useState("");
  const [results, setResults] = useState();
  //   let text = "Hola my name is yoshi and i like to dance";
  const API_KEY = ["AIzaSyBDQ7tSF6xPu54KW1fR1pk60kEczSlXQ0s"];
  let url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;

  useEffect(() => {
    if (text !== "") {
      translateSpanish();
    }
    if (translated !== "") {
      translateEnglish();
    }
  }, [text, translated]);

  const handleSpanishChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
    translateSpanish();
  };
  const handleEnglishChange = (e) => {
    e.preventDefault();
    setTranslated(e.target.value);
    translateEnglish();
  };
  const translateSpanish = () => {
    let fromLang = "es";
    let toLang = "en";
    url += "&q=" + encodeURI(text);
    url += `&source=${fromLang}`;
    url += `&target=${toLang}`;
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log("response from google: ", response);
        setResults(response.data.translations[0].translatedText);
      })
      .catch((error) => {
        console.log("There was an error with the translation request: ", error);
      });
  };

  const translateEnglish = () => {
    let fromLang = "en";
    let toLang = "es";
    url += "&q=" + encodeURI(translated);
    url += `&source=${fromLang}`;
    url += `&target=${toLang}`;
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log("response from google: ", response);
        setResults(response.data.translations[0].translatedText);
      })
      .catch((error) => {
        console.log("There was an error with the translation request: ", error);
      });
  };
  const getTranscribedSpanish = (data) => {
    setResults("");
    setTranslated("");
    setText(data);
    translateSpanish();
  };

  const getTranscribedEnglish = (data) => {
    setResults("");
    setText("");
    setTranslated(data);
    translateEnglish();
  };

  const handleBtnClick = () => {
    // setResults("");
  };
  return (
    <>
      <div className={classes.heroContent}>
        <>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Traductor <br></br>Ingles - Español
              <br></br>
              <Recording
                translateEnglish={getTranscribedEnglish}
                translateSpanish={getTranscribedSpanish}
                handleBtnClick={handleBtnClick}
                // getTranscribedEnglish={getTranscribedSpanish}
                // getTranscribedSpanish={getTranscribedSpanish}
                spanish={text}
                english={translated}
              />
            </Typography>
          </Container>
        </>
      </div>
      <div>
        <>
          <Container maxWidth="lg">
            <Typography variant="h6" component="h2"></Typography>

            <Grid container>
              <Grid item md={6}>
                <Typography variant="h5" component="h2">
                  Escriba lo que quiere traducir al Inglés
                </Typography>
                <TextareaAutosize
                  rowsMin={7}
                  aria-label="minimum height"
                  name="spanishText"
                  placeholder="Escriba lo que quiere traducir al español"
                  defaultValue={text}
                  onChange={handleSpanishChange}
                  className={classes.textarea}
                />
              </Grid>
              <Grid item md={6}>
                <Typography variant="h5" component="h2">
                  Escriba lo que quiere traducir al español
                </Typography>

                <TextareaAutosize
                  rowsMin={7}
                  aria-label="minimum height"
                  name="englishText"
                  onChange={handleEnglishChange}
                  placeholder="Escriba la frase que quiere traducir al español"
                  defaultValue={translated}
                  className={classes.textarea}
                />
              </Grid>
              <Grid item lg={12}></Grid>
            </Grid>
            <TextareaAutosize
              style={{ width: "95%" }}
              rowsMin={7}
              aria-label="minimum height"
              name="results"
              placeholder="                                                        Tus resultados apareceran aqui :)"
              defaultValue={results}
              className={classes.textarea}
            />
          </Container>
        </>
      </div>
    </>
  );
};
