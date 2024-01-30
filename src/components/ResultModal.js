import React, { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime, reaminingTime, handleReset },
  ref
) {
  const dialog = useRef();

  const userLost = reaminingTime <= 0;
  const score = Math.round((1 - reaminingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal">
      {userLost ? <h2> You Lost</h2> : <h2>Your Score : {score}</h2>}
      <p>
        The Target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You Stopped the Timer with <strong>{reaminingTime / 1000} left.</strong>
      </p>
      <form method="dialog" onSubmit={handleReset}>
        <button>CLose</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
