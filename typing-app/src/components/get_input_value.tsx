import { count } from "console";
import React, { useState, useEffect, useRef, useContext } from "react";

interface Properties {
  userText: string;
  setUserText: (string) => void;
}

function GetInputValue({ userText, setUserText }: Properties) {
  const inputRef = useRef<HTMLInputElement>(null);

  let getValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserText(event.target.value);
    // console.log(event.target.value);
  };

  let restart = () => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
      setUserText("");
      inputRef.current.value = "";
    }
  };

  return (
    <div className="flex flex-col items-center">
      <input
        ref={inputRef}
        type="text"
        onChange={getValue}
        className="w-[10rem] h-[3rem] border-2 rounded-lg font-size mt-5 opacity-0"
      />
      <p className="text-white mt-10">{userText.length}</p>
      <button className="text-white" onClick={restart}>
        Restart
      </button>
    </div>
  );
}

export default GetInputValue;
