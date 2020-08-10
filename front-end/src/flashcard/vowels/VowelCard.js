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
});

export default function VowelCard({
  letter: { letter, letterUrl, id },
  vowels,
  setVowels,
}) {
  //   console.log(letter, letterUrl);
  const classes = useStyles();
  //   const [playing, setPlaying] = useState(false);
  //   const bull = <span className={classes.bullet}>•</span>;
  let audio = new Audio();

  const handleplaySong = () => {
    audio.src = letterUrl;
    audio.play();
    // setTimeout(() => audio.pause(), 5000);
  };

  const nextCard = (e) => {
    if (id < vowels[vowels.length - 1].id) {
      setVowels((prevState) => ({
        ...prevState,
        count: prevState.count + 1,
      }));
    }
  };

  const previousCard = (e) => {
    if (id > vowels[0].id) {
      setVowels((prevState) => ({
        ...prevState,
        count: prevState.count - 1,
      }));
    }
  };

  return (
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
            {letter}
            <PlayCircleOutlineIcon
              className={classes.iconSize}
              onClick={handleplaySong}
            />
          </Typography>
          <CardActions>
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
  );
}
