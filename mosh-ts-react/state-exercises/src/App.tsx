import "./App.css";
import { useState } from "react";

interface player {
  name: string;
}
interface myGame {
  id: number;
  player: player;
}

function App() {
  const [game, setGame] = useState<myGame>({ id: 1, player: { name: "John" } });

  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 1", quantity: 1 },
    ],
  });

  const updateCart = () => {
    const newItems = cart.items.map((item) =>
      item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
    );
    const newCart = { ...cart, items: [...newItems] };
    setCart(newCart);
  };

  const handlePizza = () => {
    const newPizza = { ...pizza, toppings: [...pizza.toppings, "Anchovies"] };
    setPizza(newPizza);
  };

  const handleClick = () => {
    const newPlayer = { ...game, player: { ...game.player, name: "Gavin" } };
    setGame(newPlayer);
  };
  return (
    <>
      <p>{game.player.name}</p>
      <button onClick={handleClick}>Change the name</button>
      <p>{pizza.name}</p>
      {pizza.toppings.map((topping) => (
        <p>{topping}</p>
      ))}
      <button onClick={handlePizza}>Add more toppings</button>
      <ul>
        {cart.items.map((item) => (
          <li>
            Title: {item.title} Quantity:{item.quantity}
          </li>
        ))}
      </ul>
      <button onClick={updateCart}>Add to cart</button>
    </>
  );
}

export default App;
