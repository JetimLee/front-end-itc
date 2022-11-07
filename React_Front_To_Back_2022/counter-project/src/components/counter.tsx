import React, { useContext } from "react";
import CounterContext from "../context/CounterContext";

export const Counter = () => {
  const { count, decreaseCount, increaseCount } = useContext(CounterContext);
  return (
    <div>
      <div className="counter-container">
        <h1>Current count: {count}</h1>
        <button onClick={increaseCount}>Increase +</button>
        <button onClick={decreaseCount}>Decrease -</button>
      </div>
    </div>
  );
};
