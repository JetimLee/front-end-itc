import React, { MutableRefObject, useRef } from "react";
import { FC, useState } from "react";

interface Props {
  user: string;
  setUser: Function;
}

export const Login: FC<Props> = ({ user, setUser }) => {
  const usernameValue = useRef() as MutableRefObject<HTMLInputElement>;
  const handleUserInput = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(usernameValue.current.value);
    if (usernameValue.current.value !== "") {
      setUser(usernameValue.current.value);
      usernameValue.current.value = "";
    }
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleUserInput} action="">
        <input ref={usernameValue} type="text" placeholder="Input username" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
