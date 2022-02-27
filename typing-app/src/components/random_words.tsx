import React, { useState, useEffect, useRef, useContext } from "react";
import GetInputValue from "./get_input_value";
import Word from "./word";

interface Properties {
  userText: string;
}

const compare = (userText: string, text: string): string => {
  let textState = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      textState += " ";
    } else {
      if (i < userText.length) {
        let userLetter = userText[i];
        if (userLetter === text[i]) {
          textState += "g";
        } else {
          textState += "r";
        }
      } else {
        textState += "x";
      }
    }
  }
  return textState;
};

function RandomWordBank({ userText }: Properties) {
  const [sentence, setSentence] = useState<Array<string>>([]);
  const words: React.ReactNode[] = [];

  const textState = compare(userText, sentence.join(" ")).split(" ");

  useEffect(() => {
    const randomWords = require("random-words");
    setSentence(randomWords(15));
  }, []);

  for (let i = 0; i < sentence.length; i++) {
    words.push(
      <Word key={i} word={sentence[i]} wordState={textState[i]}></Word>
    );
    words.push(" ");
  }

  return (
    <div className="mt-20">
      <p className="text-white text-[24px] w-[48rem] tracking-widest">
        {words}
      </p>
    </div>
  );
}

export default RandomWordBank;
