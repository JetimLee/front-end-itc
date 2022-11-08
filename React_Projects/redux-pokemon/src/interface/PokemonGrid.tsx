import { FC, ReactNode } from "react";
import "./styling/pokemonGrid.css";
interface Props {
  children?: ReactNode;
}

export const PokemonGrid: FC<Props> = ({ children }) => {
  return (
    <>
      <div className="pokemon-grid-container">{children}</div>
    </>
  );
};
