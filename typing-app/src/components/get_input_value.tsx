import { count } from "console";
import React, { useState, useEffect, useRef } from "react";

function GetInputValue() {
  const [letter, setLetter] = useState("");
  const [counter, setCounter] = useState(0);
  const letterCount = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const myWords: string[] = [];

  let getValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLetter(event.target.value);
    myWords.push(event.target.value);
    console.log(myWords);
    console.log(letterCount);
    console.log(event.target.value[counter]);
    console.log(counter);
    setCounter(counter + 1);
  };

  console.log(inputRef);

  let restart = () => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.value = "";
    }
    setCounter(counter - counter);
    setLetter("");
  };

  return (
    <div>
      <input ref={inputRef} type="text" onChange={getValue} />
      <div>{letter}</div>
      <p>{letterCount.current}</p>
      <p>{counter}</p>
      <button onClick={restart}>Restart</button>
    </div>
  );
}

export default GetInputValue;
