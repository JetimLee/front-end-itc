import React, { useState, useEffect, useRef } from "react";

export const UseRefExample2 = () => {
  const renders = useRef(1);
  const prevName = useRef("");
  const [name, setName] = useState("");

  useEffect(() => {
    renders.current = renders.current + 1;
    prevName.current = name;
  }, [name]);
  return (
    <div>
      <h1> Amount of renders: {renders.current}</h1>
      <h2>Previous name state: {prevName.current}</h2>
      <input
        type={"text"}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};
