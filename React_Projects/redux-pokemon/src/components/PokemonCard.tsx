import React, { FC } from "react";
import "./styling/PokemonCard.css";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  imgUrl: string;
  id: number;
}

export const PokemonCard: FC<Props> = ({ name, imgUrl, id }) => {
  return (
    <Link to={`/pokemon/${id}`}>
      <div className="pokemon-card">
        {name} <img src={imgUrl} alt="pokemon card" />
      </div>
    </Link>
  );
};
