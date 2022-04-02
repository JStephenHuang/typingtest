import React, { useState, useEffect, useRef, useContext } from "react";
import Word from "./word";
import Cursor from "./cursor";
import { asianWordBank } from "../helper/chineseWordBank";
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
  setSpaceBoolean: (boolean) => void;
  setTypeAbility: (boolean) => void;
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
  setSpaceBoolean,
  setTypeAbility,
}: Properties) {
  // ! Declaration of useState

  const [sentence, setSentence] = useState<Array<string>>([]);
  const words: React.ReactNode[] = [];

  // ! EnglishWordGenerator

  function generateRandomWords() {
    const randomWords = require("random-words");
    setSentence(randomWords(15));
    setUserText("\0");
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
    setUserText("\0");
  }

  // ! UserWordList and TargetWordList

  const userWordList = userText.trimStart().split(/\s+/);
  const targetWordList = sentence;
  let stateList: Array<string> = [];
  let cursorPosition: number = 0;

  // ! Loop for our words

  let textState: string = "";
  for (let i = 0; i < sentence.length; i++) {
    let word: string;
    let wordState: string;

    if (i < userWordList.length) {
      let result = compareAlgorithm(userWordList[i], targetWordList[i]);
      word = result.word;
      wordState = result.wordState;
      if ((wordState.match(/\e/g) || []).length === 5) {
        setTypeAbility(false);
      } else {
        setTypeAbility(true);
      }
    } else {
      word = targetWordList[i];
      wordState = "x".repeat(targetWordList[i].length);
    }

    textState += wordState;
    stateList.push(wordState);

    words.push(
      <Word
        key={i}
        word={word}
        wordState={wordState}
        cursorPosition={cursorPosition}
      ></Word>
    );
  }

  // ! Use of useEffect

  useEffect(() => {
    lengthCount.current = sentence.join("").length;
    FState.current = textState;
    console.log("Text State: " + textState);
    console.log(stateList);

    if (stateList.length === userWordList.length) {
      setSpaceBoolean(false);
    } else {
      setSpaceBoolean(true);
    }

    console.log(FState.current);
    console.log(userWordList);
    console.log(sentence);
  }, [userText]);

  useEffect(() => {
    if (language === "asian") {
      generateChineseWords(15, asianWordBank);
    } else if (language === "english") {
      generateRandomWords();
    }
  }, [restartCounter, language]);
  // ! Returned to the interface

  return (
    <div
      className="xl:mt-12 lg:mt-10 mt-5 flex-wrap"
      onClick={() => setFocused(!focused)}
    >
      <p className={`random-words ${focused ? "blur-none" : "blur-sm"}`}>
        {words}
      </p>
    </div>
  );
}

export default RandomWordBank;
