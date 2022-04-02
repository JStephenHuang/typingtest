import { useEffect, useRef, useCallback } from "react";
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
  lengthCount: React.MutableRefObject<number>;
  FState: React.MutableRefObject<string>;
  setResults: (boolean) => void;
  time: number;
  setTime: (number) => void;
  results: boolean;
  inputRef: React.RefObject<HTMLInputElement>;
}

const Results = ({
  lengthCount,
  FState,
  setResults,
  time,
  setTime,
  results,
  inputRef,
}: Properties) => {
  const errorsCount = useRef<number>(0);
  const back = useCallback(() => {
    FState.current = "";
    setResults(false);
    setTime(0);
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, [results]);

  time = time / 1000;

  let errors = 0;
  const getErrors = () => {
    for (let i: number = 0; i < FState.current.length; i++) {
      let char = FState.current[i];
      if (char === "r" || char === "e" || char === "x") {
        errors += 1;
      }
    }
    return errors;
  };
  errorsCount.current = getErrors();

  // useEffect(() => {
  //   getErrors();
  // }, [results]);

  const percentage = () => {
    let score = Math.floor(
      ((lengthCount.current - errorsCount.current) * 1.5) /
        Math.floor(time / 5.5)
    );

    if (score < 0 || Math.floor(time / 5.5) === 0) {
      return 0 + "%";
    }
    return score + "%";
  };

  const wordsPerSecond = () => {
    let words = lengthCount.current - errorsCount.current;
    if (words / 10 < 0) {
      return 0;
    }
    return Math.floor(words / 10 / (time / 60));
  };

  const accuracy = () => {
    let percent =
      (lengthCount.current - errorsCount.current) / lengthCount.current;
    return Math.floor(percent * 100);
  };

  console.log(percentage());
  return (
    <div className="flex flex-col">
      <div className="asian-stats">
        <div className="flex flex-col items-center">
          <p className="ml-2">wpm:</p>
          <p className="text-amber-300">{wordsPerSecond()} words</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="ml-2">accuracy:</p>
          <p className="text-amber-300">{accuracy()}% </p>
        </div>
      </div>
      <div className="asian-percentage">
        <p className="">You are</p>
        <p className="text-amber-300">{percentage()}</p>
        <p className="">asian</p>
        <button className="restart-button" onClick={back}>
          {refresh}
        </button>
      </div>
    </div>
  );
};

export default Results;
