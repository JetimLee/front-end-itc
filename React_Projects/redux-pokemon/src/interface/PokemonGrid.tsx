import { FC, ReactNode } from "react";
import "./styling/pokemonGrid.css";
interface Props {
  children?: ReactNode;
}

export const PokemonGrid: FC<Props> = ({ children }) => {
  return (
    <>
      <h1>Pokemon Grid</h1>
      <div className="pokemon-grid-container">{children}</div>
    </>
  );
};
