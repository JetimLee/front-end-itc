import "./index.css";
import { Pizza } from "./components/Pizza";
import { pizzaData } from "../public/data";
function App() {
  return (
    <>
      {pizzaData.map((pizza) => {
        const { name, ingredients } = pizza;
        return <Pizza key={name} pizzaName={name} ingredients={ingredients} />;
      })}
    </>
  );
}

export default App;
