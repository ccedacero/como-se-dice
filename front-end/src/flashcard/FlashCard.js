import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ReactCardFlip from "react-card-flip";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
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
    marginTop: "40vh",
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
});

export default function OutlinedCard({
  vocab,
  word: { id, word, wordSpanish },
  setVocab,
}) {
  const classes = useStyles();
  const [isFlipped, setisFlipped] = useState(false);
  const bull = <span className={classes.bullet}>•</span>;
  const handleClick = (e) => {
    e.preventDefault();
    setisFlipped((preveState) => {
      return !preveState;
    });
  };
  const nextCard = (e) => {
    if (id < vocab[vocab.length - 1].id) {
      setVocab((prevState) => ({
        ...prevState,
        count: prevState.count + 1,
      }));
    }
  };

  const previousCard = (e) => {
    if (id > vocab[0].id) {
      setVocab((prevState) => ({
        ...prevState,
        count: prevState.count - 1,
      }));
    }
  };
  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipDirection="horizontal"
      //   flipSpeedFrontToBack="1"
    >
      <Card className={(classes.root, classes.centerCard)} variant="outlined">
        <div>
          <CardContent className={classes.center}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Como se dice?
            </Typography>
            <Typography className={classes.word} variant="h5" component="h2">
              {word}
            </Typography>
            <CardActions>
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
      <Card className={(classes.root, classes.centerCard)} variant="outlined">
        <div>
          <CardContent className={classes.center}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Como se dice?
            </Typography>
            <Typography className={classes.word} variant="h5" component="h2">
              {wordSpanish}
            </Typography>
            <CardActions>
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
  );
}
