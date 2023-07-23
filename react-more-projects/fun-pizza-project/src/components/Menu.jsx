import { pizzaData } from "../../public/data";
import { Pizza } from "../components";
const Menu = () => {
  return (
    <div>
      <h2>Our menu</h2>
      {pizzaData.map((pizza) => {
        const { name, ingredients } = pizza;
        return <Pizza key={name} pizzaName={name} ingredients={ingredients} />;
      })}
    </div>
  );
};

export { Menu };
