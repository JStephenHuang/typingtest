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
      }, 9);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  return (
    <div
      className="timer"
      onClick={() => {
        setFocused(false);
      }}
    >
      <span>{Math.floor(time / 1000) + "s"}</span>
    </div>
  );
};

export default Stopwatch;
