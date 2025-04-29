
import React from "react";
import "./stopwatch.css";

function Stopwatch() {
  return (
    <div className="stopwatch-container">
      <h1 className="stopwatch-title">Stopwatch</h1>
      <div className="stopwatch-time">00:00:00.00</div>
      <div className="stopwatch-controls">
        <button className="start-stop-btn">Start</button>
        <button className="reset-btn">Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
