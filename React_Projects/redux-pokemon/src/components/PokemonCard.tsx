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
        {imgUrl && <img src={imgUrl} alt="pokemon card" />}
        {imgUrl && <p className="pokemon-name">{name}</p>}
      </div>
    </Link>
  );
};
