import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal.js";

function TimerChallenge({ title, targetTime }) {
  const [timeReamining, setTimeReamining] = useState(targetTime * 1000);
  const timerIsActive = timeReamining > 0 && timeReamining < targetTime * 1000;

  const timer = useRef();
  const dialog = useRef();

  if (timeReamining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeReamining((prevTime) => prevTime - 10);
    }, 10);
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  function handleReset() {
    setTimeReamining(targetTime * 1000);
  }

  return (
    <>
      <ResultModal
        targetTime={targetTime}
        result="Lost"
        ref={dialog}
        reaminingTime={timeReamining}
        handleReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} seconds{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"}
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Timer started" : "Timer not started"}
        </p>
      </section>
    </>
  );
}

export default TimerChallenge;
