import React from "react";
import GetInputValue from "./components/get_input_value";
import RandomWordBank from "./components/random_words";
import { useState, useEffect, useRef } from "react";

function App() {
  const [userText, setUserText] = useState<string>("");
  return (
    <div className="flex flex-col items-center bg-neutral-800 h-screen">
      <div className="text-[36px] mt-10">
        <span className="text-amber-300">asian</span>
        <span className="text-white">type</span>
      </div>
      <div className="">
        <RandomWordBank userText={userText}></RandomWordBank>
        <GetInputValue
          userText={userText}
          setUserText={setUserText}
        ></GetInputValue>
      </div>
    </div>
  );
}

export default App;
