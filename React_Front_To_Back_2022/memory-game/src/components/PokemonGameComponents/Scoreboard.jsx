import React, { useContext } from "react";
import "../../component_styling/Scoreboard.css";

import MemoryCardContext from "../../context/MemoryCardContext";

const Scoreboard = () => {
  const { score, highScore } = useContext(MemoryCardContext);
  return (
    <div className="scoreboard-container">
      <div>
        <h2>SCOREBOARD</h2>
      </div>
      <ul className="scores-list">
        <li>CURRENT SCORE: {score}</li>
        <li>HIGHSCORE: {highScore}</li>
      </ul>
    </div>
  );
};

export default Scoreboard;
