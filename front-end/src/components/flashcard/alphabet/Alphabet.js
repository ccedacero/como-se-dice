import React, { useState, useEffect } from "react";
import AlphabetCard from "./AlphabetCard";
import Categories from "../../home/Categories";
import useIsMounted from "ismounted";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

export const Alphabet = (props) => {
  let queryStr = "";
  const isMounted = useIsMounted();
  if (
    props.match.params.name === null ||
    props.match.params.name === undefined
  ) {
    queryStr = props.history.location.pathname.split("/")[2];
  } else {
    queryStr = props.match.params.name;
  }
  // {
  const [alphabet, setAlphabet] = useState({
    letters: [],
    count: 0,
  });
  const [cardState, setCardState] = useState({
    user_id: localStorage.user,
    vocab_id: null,
    reviewed: true,
  });
  //confirmation modal
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // end fonfirmation modal

  let str = queryStr.replace(/\s/g, "");

  const vocabQuery = Categories.find(
    (categ) => categ.title.toLowerCase() === str
  ).fetchCategory;

  let fetchUrl = "";
  if (vocabQuery === "alphabets" || vocabQuery === "vowels") {
    fetchUrl = `http://localhost:3000/${vocabQuery}`;
  } else {
    fetchUrl = `http://localhost:3000/vocabs/${vocabQuery}`;
  }

  useEffect(() => {
    let token = localStorage.getItem('token');
    const payLoad = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
    fetch(fetchUrl, payLoad)
      .then((r) => r.json())
      .then((alphabetObj) => {
        if (isMounted.current) {
          setAlphabet((prevState) => ({
            ...prevState,
            letters: alphabetObj,
          }));
        }
      });
  }, []);

  let trackCardId = null;
  const renderAlphabet = () => {
    if (alphabet.letters.length > 0) {
      let currentLetter = alphabet.letters[alphabet.count];
      trackCardId = currentLetter.id;
      return (
        <AlphabetCard
          key={currentLetter.id}
          letter={currentLetter}
          setAlphabet={setAlphabet}
          alphabet={alphabet.letters}
          cardType={vocabQuery}
        />
      );
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    console.log(trackCardId);
    const deletePayload = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
    };
    fetch(`http://localhost:3000/vocabs/${trackCardId}`, deletePayload)
      .then((r) => r.json())
      .then((confirmation) => {
        setTimeout(() => props.history.push("/vocabulario"), 1000);
      });
    handleClose();
  };
  return (
    <div>
      {renderAlphabet()}
      {vocabQuery === "mycards" ? (
        <>
          <DeleteOutlineIcon
            style={{ fontSize: "50px", color: "red" }}
            onClick={handleClickOpen}
          />
          <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">
              {"Seguro que quieres borrar tu tarjeta?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Perderas toda la informaccion relacionada con tu tarjeta.
                Seguro?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleDelete} color="primary">
                Si?
              </Button>
              <Button onClick={handleClose} color="primary" autoFocus>
                No?
              </Button>
            </DialogActions>
          </Dialog>
        </>
      ) : (
          false
        )}
    </div>
  );
};

export default Alphabet;
