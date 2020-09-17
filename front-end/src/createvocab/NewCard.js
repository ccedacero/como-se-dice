import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FolderIcon from "@material-ui/icons/Folder";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Progress from "./Progress";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#95e1d3",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#95e1d3",
  },
}));

export const NewCard = () => {
  const history = useHistory();
  const classes = useStyles();
  const [state, setState] = useState();
  const [audioF, setAudioF] = useState();
  const handleChange = (e) => {
    e.preventDefault();
    e.persist();
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    e.persist();
    console.log(e);
    setAudioF({ [e.target.name]: e.target.files[0] });
    // debugger;
  };

  const fileSubmit = () => {
    // e.preventDefault();
    // debugger;
    const form = new FormData();
    form.append("audio", audioF.audio);
    fetch(`http://localhost:3000/items`, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
      method: "POST",
      body: form,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const createObj = {
      ...state,
      category: "mycards",
      // audio: blob,
    };
    const payLoad = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify(createObj),
    };

    fetch("http://localhost:3000/vocabs", payLoad)
      .then((r) => r.json())
      .then((newCardObj) => {
        console.log(newCardObj);
      });
    fileSubmit();
    history.push("/loading");
  };

  return (
    <div>
      {/* <AudioRecorder state={state} /> */}
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Agrega Nuevo Vocabulario Aqui
          </Typography>
        </Container>
      </div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <FolderIcon />
          </Avatar>
          {/* <Typography component="h1" variant="h5">
          </Typography> */}
          <form className={classes.form} onSubmit={handleSubmit} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="word"
              label="Agrega tu palabra en ingles"
              name="word"
              autoComplete="word"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="wordSpanish"
              label="Significado en español"
              type="wordSpanish"
              id="wordSpanish"
              autoComplete="current-password"
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              // required
              fullWidth
              name="wordUrl"
              label="url de Audio"
              type="wordUrl"
              id="wordUrl"
              autoComplete="current-password"
              onChange={handleChange}
            />
            <input
              // accept="audio/mpeg, audio/mp3"
              className="audio"
              name="audio"
              // id="contained-button-file"
              // multiple
              type="file"
              onChange={handleFileChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Agregar Termino
            </Button>
          </form>
        </div>
        <Box mt={8}></Box>
      </Container>
    </div>
  );
};
