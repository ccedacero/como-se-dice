import React, { useState, useEffect } from "react";
import FlashCard from "./FlashCard";

const LanguageContainer = () => {
  const [vocab, setVocab] = useState({
    words: [],
    count: 0,
  });

  useEffect(() => {
    fetch("http://localhost:3000/vocabs")
      .then((r) => r.json())
      .then((vocabObj) => {
        setVocab((prevState) => ({
          ...prevState,
          words: vocabObj,
        }));
      });
  }, []);

  console.log(vocab);
  const renderVocab = () => {
    if (vocab.words.length > 0) {
      // return vocab.words.map((word) => {
      let currentWord = vocab.words[vocab.count];
      return (
        <FlashCard
          key={currentWord.id}
          word={currentWord}
          setVocab={setVocab}
          vocab={vocab.words}
        />
      );
    }
  };
  return <div>{renderVocab()}</div>;
};

export default LanguageContainer;
