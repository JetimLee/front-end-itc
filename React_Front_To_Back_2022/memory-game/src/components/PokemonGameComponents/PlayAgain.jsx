import React from "react";
import { useContext } from "react";
import MemoryCardContext from "../../context/MemoryCardContext";
const PlayAgain = () => {
  const { resetGame } = useContext(MemoryCardContext);

  return (
    <div>
      <button onClick={resetGame}>Player Again?</button>
    </div>
  );
};

export default PlayAgain;
