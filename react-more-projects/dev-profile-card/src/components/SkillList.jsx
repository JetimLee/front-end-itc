import PropTypes from "prop-types";
import { Skill } from "./Skill";
export const SkillList = ({ skillList }) => {
  return (
    <div className="skill-list">
      {skillList.map((skillItem) => {
        const { backGroundColor, emoji, skill } = skillItem;
        return (
          <Skill
            key={skill}
            backgroundColorSelected={backGroundColor}
            emoji={emoji}
            skillText={skill}
          />
        );
      })}
    </div>
  );
};

SkillList.propTypes = {
  skillList: PropTypes.array.isRequired,
};
