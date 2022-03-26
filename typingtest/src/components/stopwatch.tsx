import React, { useState, useEffect } from "react";

interface Properties {
  time: number;
  setTime: (number) => void;
  running: boolean;
  setFocused: (boolean) => void;
}

const Stopwatch = ({ time, setTime, running, setFocused }: Properties) => {
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  return (
    <div
      className="flex flex-col mt-[10rem] text-white text-[24px]"
      onClick={() => {
        setFocused(false);
      }}
    >
      <span>{Math.floor((time / 1000) % 100) + "s"}</span>
    </div>
  );
};

export default Stopwatch;
