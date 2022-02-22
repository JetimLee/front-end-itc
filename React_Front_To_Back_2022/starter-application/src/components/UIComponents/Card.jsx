import React from "react";
import PropTypes from "prop-types";

const Card = ({ children, reverse }) => {
  //conditional class, similar to Vue
  return <div className={`card ${reverse && "reverse"}`}>{children}</div>;
};

Card.defaultProps = {
  reverse: true,
};
Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};
export default Card;
