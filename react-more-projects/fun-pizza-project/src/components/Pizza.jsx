import PropTypes from "prop-types";
const Pizza = ({ pizzaName, ingredients, pizzaPicture }) => {
  return (
    <div>
      <img src={pizzaPicture} alt="a whole pizza with varying ingredients" />
      <div>
        <h3>{pizzaName}</h3>
        <p>{ingredients}</p>
      </div>
    </div>
  );
};

Pizza.propTypes = {
  pizzaName: PropTypes.string,
  ingredients: PropTypes.string,
  pizzaPicture: PropTypes.string
};

export { Pizza };
