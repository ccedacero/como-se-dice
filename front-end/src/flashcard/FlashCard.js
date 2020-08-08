import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ReactCardFlip from "react-card-flip";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
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
    fontSize: "6.5rem",
  },
  pos: {
    marginBottom: "3em",
  },
  centerCard: {
    marginTop: "40vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "2em",
  },
  languageSize: {
    fontSize: "1.3em",
  },
  iconSize: {
    fontSize: 40,
  },
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  const [isFlipped, setisFlipped] = useState(false);
  const bull = <span className={classes.bullet}>•</span>;

  const handleClick = (e) => {
    console.log("hi");
    e.preventDefault();
    setisFlipped((preveState) => {
      return !preveState;
    });
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
              {/* {props.word} */} Hola
            </Typography>
            <CardActions>
              <Button onClick={handleClick} size="medium">
                <ArrowForwardIcon className={classes.iconSize} />
                <span className={classes.languageSize}>Ingles </span>
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
              How do you say?
            </Typography>
            <Typography className={classes.word} variant="h5" component="h2">
              {/* {props.word} */} Hello
            </Typography>
            <CardActions>
              <Button onClick={handleClick} size="medium">
                <ArrowForwardIcon className={classes.iconSize} />
                <span className={classes.languageSize}>Espanol</span>
              </Button>
            </CardActions>
          </CardContent>
        </div>
      </Card>
    </ReactCardFlip>
  );
}
