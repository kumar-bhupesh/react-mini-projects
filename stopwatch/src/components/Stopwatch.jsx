import React, { useEffect, useState } from "react";
import "./stopwatch.css";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const formatTime = (timeInMilliseconds) => {
    const totalSeconds = Math.floor(timeInMilliseconds / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
      2,
      "0"
    );
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    const milliseconds = String(timeInMilliseconds % 1000).padStart(3, "0");

    return `${hours}:${minutes}:${seconds}.${milliseconds.slice(0, 2)}`;
  };

  const toggleStopwatch = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const resetStopwatch = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="stopwatch-container">
      <h1 className="stopwatch-title">Stopwatch</h1>
      <div className="stopwatch-time">{formatTime(time)}</div>
      <div className="stopwatch-controls">
        <button className="start-stop-btn" onClick={toggleStopwatch}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button className="reset-btn" onClick={resetStopwatch}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
