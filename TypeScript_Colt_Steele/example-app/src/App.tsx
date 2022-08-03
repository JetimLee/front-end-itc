import "./App.css";
import React, { useState } from "react";
import Greeter from "./components/Greeter";
import ShoppingList from "./components/ShoppingList";
import ShoppingListForm from "./components/ShoppingListForm";
import { Product } from "./interfaces";
import { v4 as getId } from "uuid";

// const items: Product[] = [
//   { id: 1, product: "Lemon", quantity: 3 },
//   { id: 2, product: "Watermelon", quantity: 4 },
// ];

function App() {
  const [items, setItems] = useState<Product[]>([]);
  function addItem(input: string, quantity: number) {
    console.log("Made it to the app component!");
    const newProduct: Product = {
      id: getId(),
      product: input,
      quantity,
    };
    setItems([...items, newProduct]);
  }
  return (
    <div>
      <ShoppingList items={items} />
      <ShoppingListForm addItem={addItem} />
    </div>
  );
}

export default App;
