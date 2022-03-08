import React from "react";

interface Properties {
  letter: string;
  letterState: string;
}

function Letter({ letter, letterState }: Properties) {
  if (letterState === "g") {
    return (
      <span className="text-amber-300 underline underline-offset-2">
        {letter}
      </span>
    );
  } else if (letterState === "x") {
    return <span className="text-gray-300">{letter}</span>;
  } else if (letterState === "e") {
    return <span className="text-red-800">{letter}</span>;
  } else {
    return (
      <span className="text-red-500 underline underline-offset-2">
        {letter}
      </span>
    );
  }
}

export default Letter;
