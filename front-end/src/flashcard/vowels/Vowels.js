import React, { useState, useEffect } from "react";
import VowelCard from "./VowelCard";
import { payLoad } from "../../constants/index";
export const Vowels = () => {
  const [vowels, setVowels] = useState({
    letters: [],
    count: 0,
  });

  useEffect(() => {
    fetch("http://localhost:3000/vowels", payLoad)
      .then((r) => r.json())
      .then((VowelsObj) => {
        setVowels((prevState) => ({
          ...prevState,
          letters: VowelsObj,
        }));
      });
  }, []);

  // console.log(vowels);
  const renderVowels = () => {
    if (vowels.letters.length > 0) {
      let currentVowel = vowels.letters[vowels.count];
      return (
        <VowelCard
          key={currentVowel.id}
          letter={currentVowel}
          setVowels={setVowels}
          vowels={vowels.letters}
        />
      );
    }
  };
  return <div>{renderVowels()}</div>;
};

export default Vowels;
