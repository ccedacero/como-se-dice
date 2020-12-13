import React, { useState, useEffect } from "react";
import VocabCard from "./VocabCard";

export const Vocab = ({
  match: {
    params: { name },
  },
}) => {
  const [vocab, setVocab] = useState({
    words: [],
    count: 0,
  });

  useEffect(() => {
     const payLoad = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };
    fetch("http://localhost:3000/vocabs/payments", payLoad)
      .then((r) => r.json())
      .then((vocabObj) => {
        setVocab((prevState) => ({
          ...prevState,
          words: vocabObj,
        }));
      });
  }, []);

  const [cardState, setCardState] = useState({
    user_id: localStorage.user,
    vocab_id: vocab[0].id,
    reviewed: true,
  });
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
