import React, { FC } from "react";
import "./styling/PokemonCard.css";

interface Props {
  name: string;
  imgUrl: string;
}

export const PokemonCard: FC<Props> = ({ name, imgUrl }) => {
  return (
    <div className="pokemon-card">
      {name} <img src={imgUrl} alt="pokemon card" />
    </div>
  );
};
