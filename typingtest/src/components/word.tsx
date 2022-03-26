import * as React from "react";
import Letter from "./letter";
import Cursor from "./cursor";
import { useState, useEffect } from "react";

interface Properties {
  word: string;
  wordState: string;
  cursorPosition: number;
}

function Word({ word, wordState, cursorPosition }: Properties) {
  const letters: React.ReactNode[] = [];
  for (let i = 0; i < word.length; i++) {
    // if (i > 0) {
    //   const prevLetterState = wordState[i - 1];
    //   const currLetterState = wordState[i];

    //   if (prevLetterState !== "x" && currLetterState === "x") {
    //     letters.push(<Cursor />);
    //   }
    // }

    letters.push(
      <Letter key={i} letter={word[i]} letterState={wordState[i]} />
    );
  }

  return <span className="flex inline-block mr-[10px]">{letters}</span>;
}

export default Word;
