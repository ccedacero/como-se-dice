import React, { useState, useEffect } from "react";
import AlphabetCard from "./AlphabetCard";
import Categories from "../../home/Categories";
import { payLoad } from "../../constants/index";
import useIsMounted from "ismounted";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
export const Alphabet = (props) => {
  let queryStr = "";
  const isMounted = useIsMounted();
  if (
    props.match.params.name === null ||
    props.match.params.name === undefined
  ) {
    queryStr = props.history.location.pathname.split("/")[2];
    console.log(queryStr, "using split");
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
    // console.log(trackCardId);
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
        console.log(confirmation);
        // setTimeout(() => props.history.push("/vocabulario"), 500);
      });
  };
  return (
    <div>
      {renderAlphabet()}
      {vocabQuery === "mycards" ? (
        <DeleteOutlineIcon
          style={{ fontSize: "50px", color: "red" }}
          onClick={handleDelete}
        />
      ) : (
        false
      )}
    </div>
  );
};

export default Alphabet;
