import React, { useState, useEffect } from "react";
import Word from "./word";
import Cursor from "./cursor";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const caret = (
  <FontAwesomeIcon
    icon={faEllipsis as IconProp}
    className="text-amber-100 mr-5 text-[24px]"
  />
);

interface Properties {
  letter: string;
  letterState: string;
}

function Letter({ letter, letterState }: Properties) {
  if (letterState === "g") {
    return <span className="text-amber-300">{letter}</span>;
  } else if (letterState === "x") {
    return <span className="text-gray-300">{letter}</span>;
  } else if (letterState === "e") {
    return <span className="text-red-800">{letter}</span>;
  } else if (letterState === "s") {
    return <span className="text-gray-300">{letter}</span>;
  } else if (letterState === "c") {
    return (
      <>
        <Cursor />
        <span className="text-gray-300">{letter}</span>
      </>
    );
  } else {
    return <span className="text-red-500">{letter}</span>;
  }
}

export default Letter;
