import React, { useState } from "react";
import { ToDo } from "./ToDo";

export const UseRefExample3 = () => {
  const [showToDo, setShowToDo] = useState(true);
  return (
    <div>
      {showToDo && <ToDo />}{" "}
      <button onClick={() => setShowToDo(!showToDo)}>Toggle Todo</button>;
    </div>
  );
};
