import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import ReactCardFlip from "react-card-flip";
import QueuePlayNextIcon from "@material-ui/icons/QueuePlayNext";
import Container from "@material-ui/core/Container";
import Tooltip from "@material-ui/core/Tooltip";
import Alert from "@material-ui/lab/Alert";
import Alphabet from "./Alphabet.css";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginLeft: "10em",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: "2em",
  },
  word: {
    fontSize: "5.5rem",
    textAlign: "center",
  },
  centerCard: {
    marginTop: "10vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "1.5em",
  },
  languageSize: {
    fontSize: "1.3em",
  },
  iconSize: {
    fontSize: 40,
  },
  nextArrow: {
    marginLeft: "4em",
  },
  MuiCardActionsRoot: {
    display: "flex",
    padding: "8px",
    justifyContent: "center",
  },
});

export default function AlphabetCard({
  letter: { id, word, wordSpanish, wordUrl },
  alphabet,
  setAlphabet,
  cardType,
}) {
  console.log(id, word, wordSpanish, wordUrl);
  // console.log(alphabet, "this is alphabet"); array of everything working
  // console.log(setAlphabet, "this is set alphabet"); set state function working
  const [isFlipped, setisFlipped] = useState(false);
  const classes = useStyles();
  const [playing, setPlaying] = useState(false);
  const [alrt, setAlrt] = useState(false);
  const [end, setEnd] = useState(false);
  //   const bull = <span className={classes.bullet}>•</span>;
  let audio = new Audio();
  const handleplaySong = () => {
    audio.src = wordUrl;
    audio.play();
  };

  const nextCard = (e) => {
    if (id < alphabet[alphabet.length - 1].id) {
      setAlphabet((prevState) => ({
        ...prevState,
        count: prevState.count + 1,
      }));
    }
    persistCard();
  };

  const previousCard = (e) => {
    if (id > alphabet[0].id) {
      setAlphabet((prevState) => ({
        ...prevState,
        count: prevState.count - 1,
      }));
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    setisFlipped((preveState) => {
      return !preveState;
    });
  };
  // Globals storing flip and next card ids
  let currentCard = id;

  // let currentFlip = id;

  // AUTO CLICKING FUNCTIONS LIVE BELOW HERE
  // const autoFlip = () => {
  //   let interval1 = setInterval(() => {
  //     modifiedFlip(interval1);
  //   }, 3000);
  // };
  // const modifiedFlip = (interval1) => {
  //   if (currentFlip === alphabet[alphabet.length - 1].id) {
  //     clearInterval(interval1);
  //     return;
  //   }
  //   setisFlipped((preveState) => {
  //     return !preveState;
  //   });
  //   currentFlip++;
  // };

  const modifiedNext = (interval) => {
    if (currentCard === alphabet[alphabet.length - 1].id) {
      // setAlrt(true);
      clearInterval(interval);
      return;
    }

    if (id < alphabet[alphabet.length - 1].id) {
      setAlphabet((prevState) => ({
        ...prevState,
        count: prevState.count + 1,
      }));
    }
    currentCard++;
    console.log(currentCard, alphabet[alphabet.length - 1].id);
  };

  const autoNext = () => {
    setAlrt(true);
    let interval = setInterval(() => {
      modifiedNext(interval);
    }, 2000);
  };
  // const automate = () => {
  //   autoFlip();
  //   setTimeout(autoNext, 2000);
  // };

  const persistCard = () => {
    const persistObj = {
      user_id: localStorage.user,
      vocab_id: id,
      reviewed: true,
    };
    const trackPayload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify(persistObj),
    };

    fetch("http://localhost:3000/cardtracks", trackPayload)
      .then((r) => r.json())
      .then((tconfirmation) => {
        console.log(tconfirmation);
      });
  };
  console.log(end);
  return (
    <div>
      {(cardType !== null && cardType === "alphabets") ||
      (cardType !== null && cardType === "vowels") ? (
        <>
          <Container maxWidth="sm">
            <Card
              className={(classes.root, classes.centerCard)}
              variant="outlined"
            >
              <div>
                <CardContent className={classes.center}>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    Como se dice?
                  </Typography>
                  <Typography
                    className={classes.word}
                    variant="h5"
                    component="h2"
                  >
                    {word}
                    <PlayCircleOutlineIcon
                      className={classes.iconSize}
                      onClick={handleplaySong}
                    />
                  </Typography>
                  <CardActions className={classes.MuiCardActionsRoot}>
                    <Button onClick={previousCard} size="medium">
                      <ArrowBackIcon className={classes.iconSize} />
                      <span className={classes.languageSize}>Back</span>
                    </Button>
                    <Button
                      onClick={nextCard}
                      className={classes.nextArrow}
                      size="medium"
                    >
                      <ArrowForwardIcon className={classes.iconSize} />
                      <span className={classes.languageSize}>Next</span>
                    </Button>
                  </CardActions>
                </CardContent>
              </div>
            </Card>
          </Container>
        </>
      ) : (
        <>
          <Container maxWidth="sm">
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {" "}
              Auto Play
            </Typography>
            <Tooltip
              title="Switch Card every 5 seconds"
              aria-label="Switch Card every 5 seconds"
            >
              <QueuePlayNextIcon
                style={{ fontSize: "60px", color: "rgb(149, 225, 211)" }}
                onClick={autoNext}
              />
            </Tooltip>
            {alrt === true ? (
              <div>
                <Alert severity="success">"Activado"</Alert>
              </div>
            ) : (
              false
            )}
            {end === true ? (
              <Alert severity="success">
                "No Hay Mas Tarjetas!" —
                <strong>"Continua Estudiando! :)"</strong>
              </Alert>
            ) : (
              false
            )}
            <ReactCardFlip
              isFlipped={isFlipped}
              flipDirection="horizontal"
              //   flipSpeedFrontToBack="1"
            >
              <Card
                className={(classes.root, classes.centerCard)}
                variant="outlined"
              >
                <div>
                  <CardContent className={classes.center}>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      Como se dice?
                    </Typography>
                    <Typography
                      className={classes.word}
                      variant="h5"
                      component="h2"
                    >
                      {wordSpanish}
                    </Typography>
                    <CardActions className={classes.MuiCardActionsRoot}>
                      <Button onClick={previousCard} size="medium">
                        <ArrowBackIcon className={classes.iconSize} />
                        <span className={classes.languageSize}>Back</span>
                      </Button>
                      <Button onClick={handleClick} size="medium">
                        <span className={classes.languageSize}>Ingles </span>
                      </Button>
                      <Button
                        onClick={nextCard}
                        className={classes.nextArrow}
                        size="medium"
                      >
                        <ArrowForwardIcon className={classes.iconSize} />
                        <span className={classes.languageSize}>Next</span>
                      </Button>
                    </CardActions>
                  </CardContent>
                </div>
              </Card>
              <Card
                className={(classes.root, classes.centerCard)}
                variant="outlined"
              >
                <div>
                  <CardContent className={classes.center}>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      Como se dice?
                    </Typography>
                    <Typography
                      className={classes.word}
                      variant="h5"
                      component="h2"
                    >
                      {word}
                      <PlayCircleOutlineIcon
                        className={classes.iconSize}
                        onClick={handleplaySong}
                      />
                    </Typography>
                    <CardActions className={classes.MuiCardActionsRoot}>
                      <Button onClick={previousCard} size="medium">
                        <ArrowBackIcon className={classes.iconSize} />
                        <span className={classes.languageSize}>Back</span>
                      </Button>
                      <Button onClick={handleClick} size="medium">
                        <span className={classes.languageSize}>Español </span>
                      </Button>
                      <Button
                        onClick={nextCard}
                        className={classes.nextArrow}
                        size="medium"
                      >
                        <ArrowForwardIcon className={classes.iconSize} />
                        <span className={classes.languageSize}>Next</span>
                      </Button>
                    </CardActions>
                  </CardContent>
                </div>
              </Card>
            </ReactCardFlip>
          </Container>
        </>
      )}
    </div>
  );
}
