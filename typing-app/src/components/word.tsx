import * as React from "react";
import Letter from "./letter";

interface Properties {
  word: string;
  wordState: string;
}

function Word({ word, wordState }: Properties) {
  const letters: React.ReactNode[] = [];
  for (let i = 0; i < word.length; i++) {
    letters.push(
      <Letter key={i} letter={word[i]} letterState={wordState[i]}></Letter>
    );
  }

  return <span>{letters}</span>;
}

export default Word;
