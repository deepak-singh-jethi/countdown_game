import React, { useState, useRef, useEffect } from "react";

export default function Player() {
  const [playerName, setPlayerNmae] = useState(null);
  const inputRef = useRef();

  function handleClick() {
    setPlayerNmae(inputRef.current.value);
    inputRef.current.value = "";
  }
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={inputRef} />;
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
