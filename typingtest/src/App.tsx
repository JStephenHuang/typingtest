import React from "react";
import GetInputValue from "./components/get_input_value";
import RandomWordBank from "./components/random_words";
import FocusWarning from "./components/focus_warning";
import ToggleLanguage from "./components/toggle_language";
import Stopwatch from "./components/stopwatch";
import Results from "./components/resultls";
import { useState, useEffect, useRef } from "react";

function App() {
  const [userText, setUserText] = useState<string>("\0");
  const [focused, setFocused] = useState<boolean>(true);
  const [restartCounter, setRestartCounter] = useState<number>(0);
  const [language, setLanguage] = useState<string>("asian");
  const [time, setTime] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);
  const [results, setResults] = useState<boolean>(false);
  const [spaceBoolean, setSpaceBoolean] = useState<boolean>(true);
  const [typeAbility, setTypeAbility] = useState<boolean>(true);
  const lengthCount = useRef<number>(0);
  const FState = useRef<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={`flex flex-col items-center h-screen z-[5]`}>
      <div className="text-[36px] lg:mt-10 mt-5 z-20">
        <span className="text-amber-300">asian</span>
        <span className="text-white">type</span>
      </div>

      <ToggleLanguage
        language={language}
        setLanguage={setLanguage}
        setRunning={setRunning}
        setTime={setTime}
      ></ToggleLanguage>
      <div className="main">
        {results ? (
          <div className="z-10">
            <Results
              lengthCount={lengthCount}
              FState={FState}
              setResults={setResults}
              time={time}
              setTime={setTime}
              results={results}
              inputRef={inputRef}
            ></Results>
          </div>
        ) : (
          <div className="z-10 grid place-items-center ">
            <FocusWarning
              focused={focused}
              setFocused={setFocused}
            ></FocusWarning>
            <Stopwatch
              time={time}
              setTime={setTime}
              running={running}
              setFocused={setFocused}
            ></Stopwatch>
            <RandomWordBank
              userText={userText}
              setUserText={setUserText}
              focused={focused}
              setFocused={setFocused}
              restartCounter={restartCounter}
              language={language}
              lengthCount={lengthCount}
              FState={FState}
              setSpaceBoolean={setSpaceBoolean}
              setTypeAbility={setTypeAbility}
            ></RandomWordBank>
            <GetInputValue
              userText={userText}
              setUserText={setUserText}
              focused={focused}
              setFocused={setFocused}
              setRestartSwitch={setRestartCounter}
              setTime={setTime}
              setRunning={setRunning}
              setResults={setResults}
              FState={FState}
              time={time}
              setSpaceBoolean={setSpaceBoolean}
              spaceBoolean={spaceBoolean}
              inputRef={inputRef}
              typeAbility={typeAbility}
            ></GetInputValue>
          </div>
        )}
      </div>
      <div
        className="bg-neutral-800 absolute w-screen h-screen z-[6]"
        onClick={() => setFocused(false)}
      ></div>
      <p className="z-10 text-white text-[12px] xl:mt-[15rem] lg:mt-[3rem] mt-[12rem]">
        by Stephen Huang
      </p>
      <div className="flex z-10">
        <p className="text-white text-[12px] mr-1">inspired by</p>
        <a
          className="text-white text-[12px] underline"
          href="https://monkeytype.com/"
        >
          monkeytype
        </a>
      </div>
    </div>
  );
}

export default App;
