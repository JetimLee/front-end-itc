import React, { FC } from "react";

interface Props {
  username: string;
  setUser: Function;
}

export const Header: FC<Props> = ({ username, setUser }) => {
  const handleLogout = () => {
    setUser("");
  };
  return (
    <div>
      <h2>Hello, {username}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
