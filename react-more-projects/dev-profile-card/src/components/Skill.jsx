import PropTypes from "prop-types";
export const Skill = ({ backgroundColorSelected, emoji, skillText }) => {
  return (
    <div className="skill" style={{ backgroundColor: backgroundColorSelected }}>
      <p>{skillText}</p>
      <span>{emoji}</span>
    </div>
  );
};

Skill.propTypes = {
  backgroundColorSelected: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  skillText: PropTypes.string.isRequired,
};
