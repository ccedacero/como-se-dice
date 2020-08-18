import React, { useState, useEffect } from "react";
import AlphabetCard from "./AlphabetCard";
import Categories from "../../home/Categories";
import { payLoad } from "../../constants/index";
export const Alphabet = (props) => {
  let queryStr = "";

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

  const vocabSection = Categories.find(
    (categ) => categ.title.toLowerCase() === queryStr
  );

  const fetchName = vocabSection.fetchCategory;
  let fetchUrl = "";
  if (fetchName === "alphabets" || fetchName === "vowels") {
    fetchUrl = `http://localhost:3000/${fetchName}`;
  } else {
    fetchUrl = `http://localhost:3000/vocabs/${fetchName}`;
  }

  useEffect(() => {
    fetch(fetchUrl, payLoad)
      .then((r) => r.json())
      .then((alphabetObj) => {
        setAlphabet((prevState) => ({
          ...prevState,
          letters: alphabetObj,
        }));
      });
  }, []);

  const renderAlphabet = () => {
    if (alphabet.letters.length > 0) {
      let currentLetter = alphabet.letters[alphabet.count];
      return (
        <AlphabetCard
          key={currentLetter.id}
          letter={currentLetter}
          setAlphabet={setAlphabet}
          alphabet={alphabet.letters}
          cardType={fetchName}
        />
      );
    }
  };

  return <div>{renderAlphabet()}</div>;
};

export default Alphabet;
