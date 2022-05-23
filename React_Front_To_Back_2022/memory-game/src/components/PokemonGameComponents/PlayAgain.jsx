import React from "react";
import { useContext } from "react";
import MemoryCardContext from "../../context/MemoryCardContext";
import "../../component_styling/PlayAgain.css";
const PlayAgain = () => {
  const { resetGame } = useContext(MemoryCardContext);

  return (
    <div className="game-over">
      <button onClick={resetGame}>Play Again?</button>
    </div>
  );
};

export default PlayAgain;
