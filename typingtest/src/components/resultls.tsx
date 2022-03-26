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

  console.log(lengthCount.current);
  console.log(errorsCount.current);
  console.log(Math.floor((time / 1000) % 60) / 3);
  console.log(results);
  // useEffect(() => {
  //   getErrors();
  // }, [results]);

  console.log(Math.floor((time / 1000) % 60));
  const percentage = () => {
    return (
      Math.floor(
        ((lengthCount.current - errorsCount.current) * 1.5) /
          Math.floor(((time / 1000) % 60) / 3)
      ) + "%"
    );
  };
  console.log(percentage());
  return (
    <div className="flex flex-col items-center justify-center text-white text-[24px]">
      <p className="">You are</p>
      <p className="text-amber-300">{percentage()}</p>
      <p className="">asian</p>
      <button className="mt-10 animate-spin-slow" onClick={back}>
        {refresh}
      </button>
    </div>
  );
};

export default Results;
