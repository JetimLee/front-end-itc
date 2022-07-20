import React, { FC } from "react";
import { Product } from "../interfaces";

interface Props {
  items: Product[];
}

const ShoppingList: FC<Props> = ({ items }) => {
  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {items.map(({ product, quantity, id }) => {
          return (
            <li key={id}>
              {product} - {quantity}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShoppingList;
