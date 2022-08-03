import React from "react";
import { useContext } from "react";
import MemoryCardContext from "../../context/MemoryCardContext";
import "../../component_styling/PlayAgain.css";
const PlayAgain = () => {
  const { resetGame } = useContext(MemoryCardContext);

  return (
    <div className="game-over">
      <button className="play-again-button" onClick={resetGame}>
        PLAY AGAIN?
      </button>
    </div>
  );
};

export default PlayAgain;
