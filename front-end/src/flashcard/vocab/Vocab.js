import React, { useState, useEffect } from "react";
import VocabCard from "./VocabCard";

export const Vocab = () => {
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
  const renderVocab = () => {
    if (vocab.words.length > 0) {
      let currentWord = vocab.words[vocab.count];
      return (
        <VocabCard
          key={currentWord.id}
          currentWord={currentWord}
          setVocab={setVocab}
          vocab={vocab.words}
        />
      );
    }
  };
  return <div>{renderVocab()}</div>;
};

export default Vocab;
