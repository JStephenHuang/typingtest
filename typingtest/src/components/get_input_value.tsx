import React, { useEffect } from "react";
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
  FState: React.MutableRefObject<string>;
  time: number;
  setSpaceBoolean: (boolean) => void;
  spaceBoolean: boolean;
  inputRef: React.RefObject<HTMLInputElement>;
  typeAbility: boolean;
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
  FState,
  time,
  spaceBoolean,
  inputRef,
  typeAbility,
}: Properties) {
  let getValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserText(event.target.value + "\0");
    start();

    // console.log(event.target.value);
  };

  let start = () => {
    setRunning(true);
  };

  let restart = () => {
    if (inputRef && inputRef.current) {
      setUserText("\0");
      inputRef.current.value = "";
      setFocused(true);
      inputRef.current.focus();
    }
    setTime(0);
    setRunning(false);
    setRestartSwitch((count) => count + 1);
  };

  // ! Restart Shortcut Shift + Enter

  // const shortcutRestart = useCallback((event: React.KeyboardEvent) => {
  //   // check if the Shift key is pressed
  //   if (event.shiftKey === true) {
  //     if (event.key === "Enter") {
  //       restart();
  //     }
  //   }
  // }, []);
  const NoSpace = (event: React.KeyboardEvent) => {
    if (event.key === " ") {
      event.preventDefault();
    }
  };

  const onlySpace = (event: React.KeyboardEvent) => {
    if (event.key !== " " && event.key !== "Backspace" && event.key !== "Tab") {
      event.preventDefault();
    }
  };

  let focus = () => {
    setFocused(true);
  };

  // const handleKeyPress = (event: React.KeyboardEvent) => {
  //   console.log(`LOL ${event.key}`);
  // };

  let lastState = FState.current[FState.current.length - 1];

  // ! Conditions

  if (Math.floor((time / 1000) % 101) === 100 || userText.length === 1000) {
    setResults(true);
    setRunning(false);
  }

  useEffect(() => {
    if (lastState === "c") {
      setRunning(false);
      setResults(true);
    }

    if (focused) {
      if (inputRef && inputRef.current) {
        inputRef.current.focus();
      }
    }
  }, [FState.current, focused]);

  return (
    <div className="flex flex-col items-center" onClick={focus}>
      <input
        ref={inputRef}
        type="text"
        onChange={getValue}
        onKeyPress={spaceBoolean ? undefined : NoSpace}
        onKeyDown={typeAbility ? undefined : onlySpace}
        tabIndex={-1}
        className="w-[10rem] h-[3rem] border-2 rounded-lg font-size opacity-0 fixed -bottom-16"
      />
      <div className="flex flex-col items-center">
        <p className="text-white mt-[8rem] text-[24px]" tabIndex={-1}>
          {userText.length}
        </p>
        <button
          className="text-[24px] mt-10 animate-spin-slow z-20"
          tabIndex={0}
          onClick={restart}
        >
          {refresh}
        </button>
      </div>
    </div>
  );
}

export default GetInputValue;
