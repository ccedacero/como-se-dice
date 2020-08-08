import React, { useState, useEffect } from "react";
import FlashCard from "./FlashCard";

const LanguageContainer = () => {
  const [vocab, setVocab] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/vocabs")
      .then((r) => r.json())
      .then((vocabObj) => {
        // setVocab(vocabObj);
      });
  }, []);

  const renderVocab = () => {
    return vocab.map((word) => {
      return <FlashCard key={word.id} word={word} />;
    });
  };
  return (
    <div>
      <FlashCard />
      {/* {renderVocab()} */}
    </div>
  );
};

export default LanguageContainer;
