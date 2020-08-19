import React, { useState, setEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const FormStyles = makeStyles((theme) => ({
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
    width: "40%",
  },
}));
export const Translator = () => {
  const classes = FormStyles();

  const [text, setText] = useState();
  const [translated, setTranslated] = useState();
  const [results, setResults] = useState();
  //   let text = "Hola my name is yoshi and i like to dance";
  const API_KEY = ["AIzaSyBDQ7tSF6xPu54KW1fR1pk60kEczSlXQ0s"];
  let url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;

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

  return (
    <div>
      <h5>Escriba lo que quiere traducir al Ingles</h5>
      <TextareaAutosize
        rowsMin={7}
        aria-label="minimum height"
        name="spanishText"
        placeholder="Enter text you would like to translate"
        defaultValue={text}
        onChange={handleSpanishChange}
        className={classes.textarea}
      />
      <h5>Escriba lo que quiere traducir al español</h5>
      <TextareaAutosize
        rowsMin={7}
        aria-label="minimum height"
        name="englishText"
        onChange={handleEnglishChange}
        placeholder="Escriba la frase que quiere traducir al español"
        defaultValue={translated}
        className={classes.textarea}
      />
      <TextareaAutosize
        rowsMin={7}
        aria-label="minimum height"
        name="results"
        placeholder="Escriba la frase que quiere traducir al español"
        defaultValue={results}
        className={classes.textarea}
      />
    </div>
  );
};
