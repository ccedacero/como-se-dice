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
import Container from "@material-ui/core/Container";
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
    marginTop: "20vh",
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
  // console.log(alphabet, "this is alphabet"); array of everything working
  // console.log(setAlphabet, "this is set alphabet"); set state function working
  const [isFlipped, setisFlipped] = useState(false);
  const classes = useStyles();
  const [playing, setPlaying] = useState(false);
  //   const bull = <span className={classes.bullet}>•</span>;
  let audio = new Audio();
  const handleplaySong = () => {
    audio.src = wordUrl;
    audio.play();
    // setTimeout(() => audio.pause(), 5000);
  };

  const nextCard = (e) => {
    if (id < alphabet[alphabet.length - 1].id) {
      setAlphabet((prevState) => ({
        ...prevState,
        count: prevState.count + 1,
      }));
    }
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
            </ReactCardFlip>
          </Container>
        </>
      )}
    </div>
  );
}
