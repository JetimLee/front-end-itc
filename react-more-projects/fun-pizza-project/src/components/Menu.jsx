import { pizzaData } from "../../public/data";
import { Pizza } from "../components";
const Menu = () => {
  return (
    <div className="menu">
      <h2>Our menu</h2>
      {pizzaData.map((pizza) => {
        const { name, ingredients, photoName } = pizza;
        return <Pizza key={name} pizzaName={name} pizzaPicture={photoName} ingredients={ingredients} />;
      })}
    </div>
  );
};

export { Menu };
