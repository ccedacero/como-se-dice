import React, { useState, useEffect } from "react";
import AlphabetCard from "./AlphabetCard";

export const Alphabet = () => {
  const [alphabet, setAlphabet] = useState({
    letters: [],
    count: 0,
  });

  useEffect(() => {
    fetch("http://localhost:3000/alphabets")
      .then((r) => r.json())
      .then((alphabetObj) => {
        setAlphabet((prevState) => ({
          ...prevState,
          letters: alphabetObj,
        }));
      });
  }, []);

  // console.log(alphabet);
  const renderAlphabet = () => {
    if (alphabet.letters.length > 0) {
      let currentLetter = alphabet.letters[alphabet.count];
      return (
        <AlphabetCard
          key={currentLetter.id}
          letter={currentLetter}
          setAlphabet={setAlphabet}
          alphabet={alphabet.letters}
        />
      );
    }
  };
  return <div>{renderAlphabet()}</div>;
};

export default Alphabet;
