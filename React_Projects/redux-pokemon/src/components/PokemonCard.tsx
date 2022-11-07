import React, { FC } from "react";

interface Props {
  name: string;
}

export const PokemonCard: FC<Props> = ({ name }) => {
  return <div>{name}</div>;
};
