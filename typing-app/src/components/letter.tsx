interface Properties {
  letter: string;
  letterState: string;
}

function Letter({ letter, letterState }: Properties) {
  if (letterState === "x") {
    return <span className="text-gray-400">{letter}</span>;
  } else if (letterState === "g") {
    return <span className="text-amber-300">{letter}</span>;
  } else {
    return <span className="text-red-500">{letter}</span>;
  }
}

export default Letter;
