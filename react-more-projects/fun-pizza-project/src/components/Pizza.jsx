import PropTypes from "prop-types";
const Pizza = ({ pizzaName, ingredients }) => {
  return (
    <div>
      <h2>{pizzaName}</h2>
      <p>{ingredients}</p>
    </div>
  );
};

Pizza.propTypes = {
  pizzaName: PropTypes.string,
  ingredients: PropTypes.string,
};

export { Pizza };
