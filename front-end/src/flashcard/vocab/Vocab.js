import React, { useState, useEffect } from "react";
import VocabCard from "./VocabCard";
import Categories from "../../home/Categories";
import { payLoad } from "../../constants/index";

export const Vocab = ({
  match: {
    params: { name },
  },
}) => {
  const [vocab, setVocab] = useState({
    words: [],
    count: 0,
  });

  console.log(name);
  useEffect(() => {
    fetch("http://localhost:3000/vocabs/payments", payLoad)
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
