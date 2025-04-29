
import React, { useState } from "react";
import "./stopwatch.css";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);


  return (
    <div className="stopwatch-container">
      <h1 className="stopwatch-title">Stopwatch</h1>
      <div className="stopwatch-time">00:00:00.00</div>
      <div className="stopwatch-controls">
        <button className="start-stop-btn">{isRunning ? "Stop" : "Start"}</button>
        <button className="reset-btn">Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
