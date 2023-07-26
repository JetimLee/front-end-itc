import PropTypes from "prop-types";
export const Intro = ({ name, introText }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{introText}</p>
    </div>
  );
};

Intro.propTypes = {
  name: PropTypes.string.isRequired,
  introText: PropTypes.string.isRequired,
};
