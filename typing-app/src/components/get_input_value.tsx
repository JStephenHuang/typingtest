import React, { useState, useEffect, useRef, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

const refresh = (
  <FontAwesomeIcon
    icon={faRotateRight as IconProp}
    className="text-amber-300 hover:text-amber-500 ease-in-out duration-200"
  />
);

interface Properties {
  userText: string;
  setUserText: (string) => void;
  focused: boolean;
  setFocused: (boolean) => void;
  setRestartSwitch: (boolean) => void;
  setTime: (number) => void;
  setRunning: (boolean) => void;
  setResults: (boolean) => void;
  lengthCount: React.MutableRefObject<number>;
  FState: React.MutableRefObject<string>;
  time: number;
}

function GetInputValue({
  userText,
  setUserText,
  focused,
  setFocused,
  setRestartSwitch,
  setTime,
  setRunning,
  setResults,
  lengthCount,
  FState,
  time,
}: Properties) {
  const inputRef = useRef<HTMLInputElement>(null);
  let getValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserText(event.target.value);
    start();
    // console.log(event.target.value);
  };

  let start = () => {
    setRunning(true);
  };

  let restart = () => {
    if (inputRef && inputRef.current) {
      setUserText("");
      inputRef.current.value = "";
      setFocused(true);
    }
    setTime(0);
    setRunning(false);
    setRestartSwitch((count) => count + 1);
  };

  if (Math.floor((time / 1000) % 60) === 100) {
    restart();
  }

  let focus = () => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
    setFocused(true);
  };

  if (focused) {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }

  if (userText === "") {
    if (inputRef && inputRef.current) {
      inputRef.current.value = "";
    }
  }

  let lastChar = FState.current[FState.current.length - 1];

  if (lastChar === "g" || lastChar === "r") {
    setRunning(false);
    setResults(true);
  }

  return (
    <div className="flex flex-col items-center" onClick={focus}>
      <input
        ref={inputRef}
        type="text"
        onChange={getValue}
        className="w-[10rem] h-[3rem] border-2 rounded-lg font-size opacity-0 fixed -bottom-16"
      />
      <div className="flex flex-col items-center">
        <p className="text-white mt-10 text-[24px]">{userText.length}</p>
        <button
          className="text-[24px] mt-10 animate-spin-slow"
          onClick={restart}
        >
          {refresh}
        </button>
      </div>
    </div>
  );
}

export default GetInputValue;
