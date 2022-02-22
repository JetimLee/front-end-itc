import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, version, type, isDisabled }) => {
  return (
    <button type={type} version={version} className={`btn btn-${version}`}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
  version: PropTypes.string,
  type: PropTypes.string,
};
export default Button;
