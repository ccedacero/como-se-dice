import React, { useState, useEffect } from "react";
import Alphabet from "./alphabet/Alphabet";
import VowelCard from "./vowels/Vowels";
import Vocab from "./vocab/Vocab";
const LanguageContainer = () => {
  return (
    <div>
      <Vocab />
      <Alphabet />
      <VowelCard />
    </div>
  );
};

export default LanguageContainer;
