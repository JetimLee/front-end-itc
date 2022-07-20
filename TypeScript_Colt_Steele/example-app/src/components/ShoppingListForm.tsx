import React, { FC, MouseEvent, useState, useRef } from "react";
import { Product } from "../interfaces";

interface Props {
  addItem: (input: string, quantity: number) => void;
}

const ShoppingListForm: FC<Props> = ({ addItem }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const quantityRef = useRef<HTMLInputElement>(null);
  //   const [input, setInput] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProduct = inputRef.current!.value;
    const newProductQuantity = parseFloat(quantityRef.current!.value);
    addItem(newProduct, newProductQuantity);
    console.log(quantityRef.current!.value);
    inputRef.current!.value = "";
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" placeholder="Product name..." />
        <input ref={quantityRef} inputMode="numeric" min="1" type="number" />
        <button type="submit">Add item</button>
      </form>
    </>
  );
};

export default ShoppingListForm;
