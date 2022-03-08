import React, { useState, useEffect } from "react";

interface Properties {
  time: number;
  setTime: (number) => void;
  running: boolean;
  setRunning: (boolean) => void;
}

const Stopwatch = ({ time, setTime, running, setRunning }: Properties) => {
  const reset = () => {
    setTime(0);
    setRunning(false);
  };

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
    <div className="flex flex-col mt-16 text-white text-[24px]">
      <span>{Math.floor((time / 1000) % 60) + "s"}</span>
    </div>
  );
};

export default Stopwatch;
