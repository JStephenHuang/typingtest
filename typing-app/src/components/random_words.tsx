import { stat } from "fs";
import React, { useState, useEffect, useRef, useContext } from "react";
import { start } from "repl";
import { text } from "stream/consumers";
import GetInputValue from "./get_input_value";
import Word from "./word";
import { compareAlgorithm } from "../helper/compare-algorithm";

// ! Interface

interface Properties {
  userText: string;
  setUserText: (string) => void;
  focused: boolean;
  setFocused: (boolean) => void;
  restartCounter: number;
  language: string;
  lengthCount: React.MutableRefObject<number>;
  FState: React.MutableRefObject<string>;
}

function RandomWordBank({
  userText,
  setUserText,
  focused,
  setFocused,
  restartCounter,
  language,
  lengthCount,
  FState,
}: Properties) {
  // ! Declaration of useState

  const [sentence, setSentence] = useState<Array<string>>([]);
  const words: React.ReactNode[] = [];

  // ! AsianWords

  const asianWordBank: string[] = [
    "failure",
    "china",
    "chopstick",
    "chowmein",
    "gyoza",
    "education",
    "c",
    "a",
    "decent",
    "b",
    "reportcard",
    "disapointement",
    "parents",
    "neuroscientist",
    "money",
    "child",
    "young",
    "chores",
    "piano",
    "guitar",
    "book",
    "outside",
    "sandal",
    "illsendyoutojesus",
    "StevenHe",
    "poor",
    "rich",
    "BeijingCorn",
    "chinese",
    "study",
    "asian",
    "singer",
    "son",
    "father",
    "friedrice",
    "rice",
    "redbag",
    "new",
    "year",
    "american",
    "accent",
    "teacher",
    "library",
    "no",
    "electronics",
    "nuclearhealth",
    "doctor",
    "engineer",
    "clean",
    "your",
    "room",
    "glasses",
    "mathematics",
    "equations",
    "cook",
    "grandparents",
    "bouddha",
  ];

  // ! EnglishWordGenerator

  function generateRandomWords() {
    const randomWords = require("random-words");
    setSentence(randomWords(10));
    setUserText("");
  }

  // ! ChineseWordGenerator

  function generateChineseWords(number, array) {
    const randomChineseBank: string[] = [];
    for (let i = 0; i < number; i++) {
      let randomChineseWord: string =
        array[Math.floor(Math.random() * array.length)];
      randomChineseBank.push(randomChineseWord);
    }
    setSentence(randomChineseBank);
    setUserText("");
  }

  // ! UserWordList and TargetWordList

  const userWordList = userText.trim().split(/\s+/);
  const targetWordList = sentence;

  // ! Loop for our words

  let textState: string = "";
  for (let i = 0; i < sentence.length; i++) {
    if (i < userWordList.length) {
      const { word, wordState } = compareAlgorithm(
        userWordList[i],
        targetWordList[i]
      );
      words.push(<Word key={i} word={word} wordState={wordState}></Word>);
      words.push(<span className="opacity-0">'</span>);

      textState += wordState;
    } else {
      const word = targetWordList[i];
      const wordState = "x".repeat(targetWordList[i].length);
      words.push(<Word key={i} word={word} wordState={wordState}></Word>);
      words.push(<span className="opacity-0">'</span>);
      textState += wordState;
    }
  }

  // ! GetLength of the sentence

  // ! Use of useEffect

  useEffect(() => {
    lengthCount.current = sentence.join("").length;
    FState.current = textState;
  });
  console.log(FState.current);

  useEffect(() => {
    if (language === "asian") {
      generateChineseWords(2, asianWordBank);
    } else if (language === "english") {
      generateRandomWords();
    }
  }, [restartCounter, language]);

  // ! Returned to the interface

  return (
    <div className="mt-6 flex-wrap" onClick={() => setFocused(!focused)}>
      <p
        className={`flex flex-wrap content-start text-[28px] h-[10rem] w-[55rem] tracking-widest ease-in-out duration-300 ${
          focused ? "blur-none" : "blur-sm"
        }`}
      >
        {words}
      </p>
    </div>
  );
}

export default RandomWordBank;
