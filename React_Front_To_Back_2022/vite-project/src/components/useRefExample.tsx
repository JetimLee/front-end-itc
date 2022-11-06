import React, { MutableRefObject, useRef } from "react";

export const UseRefExample = () => {
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("hello");
    //changing a reference value does not effect the state value and thus will not rerender
    console.log(inputRef.current.value);
  };
  return (
    <div>
      <h1>useref1</h1>
      <form onSubmit={onSubmit}>
        <label>Name</label>
        <input ref={inputRef} type={"text"} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
