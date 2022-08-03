import React, { FC } from "react";

interface Props {
  name: string;
}

const Greeter: FC<Props> = ({ name }) => {
  return <h1>Hello, {name}</h1>;
};

export default Greeter;
