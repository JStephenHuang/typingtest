import React from "react";
import "./App.css";
import GetInputValue from "./components/get_input_value";
import RandomWordBank from "./components/random_words";
import FocusWarning from "./components/focus_warning";
import ToggleLanguage from "./components/toggle_language";
import Stopwatch from "./components/stopwatch";
import Results from "./components/resultls";
import { useState, useEffect, useRef } from "react";

function App() {
  const [userText, setUserText] = useState<string>("");
  const [focused, setFocused] = useState<boolean>(true);
  const [restartCounter, setRestartCounter] = useState<number>(0);
  const [language, setLanguage] = useState<string>("asian");
  const [time, setTime] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);
  const [results, setResults] = useState<boolean>(false);
  const lengthCount = useRef<number>(0);
  const FState = useRef<string>("");
  const userLengthCount = useRef<number>(0);

  if (results) {
    return (
      <div>
        <Results
          lengthCount={lengthCount}
          FState={FState}
          setResults={setResults}
          time={time}
          setTime={setTime}
          setFocused={setFocused}
          results={results}
        ></Results>
      </div>
    );
  } else {
    return (
      <div className={`flex flex-col items-center h-screen z-[5]`}>
        <div className="text-[36px] mt-10 z-20">
          <span className="text-amber-300">asian</span>
          <span className="text-white">type</span>
        </div>
        <ToggleLanguage
          language={language}
          setLanguage={setLanguage}
          setRunning={setRunning}
          setTime={setTime}
        ></ToggleLanguage>

        <div className="z-10">
          <FocusWarning
            focused={focused}
            setFocused={setFocused}
          ></FocusWarning>
          <Stopwatch
            time={time}
            setTime={setTime}
            running={running}
            setRunning={setRunning}
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
            lengthCount={lengthCount}
            FState={FState}
            time={time}
          ></GetInputValue>
        </div>
        <div
          className="bg-neutral-800 absolute w-screen h-screen z-[6]"
          onClick={() => setFocused(false)}
        ></div>
      </div>
    );
  }
}

export default App;
