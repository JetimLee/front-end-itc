import React, { useState, useContext } from "react";
import "./RobotCard.css";
import RobotListContext from "../context/RobotListContext";

import { FaPlus } from "react-icons/fa";
const RobotCard = ({
  grades,
  city,
  company,
  email,
  firstName,
  average,
  id,
  lastName,
  pic,
  skill,
  tags,
}) => {
  const { robots, setRobots } = useContext(RobotListContext);
  const toggleGrades = () => {
    setGradesToggled(!gradesToggled);
  };
  const addTag = (e) => {
    const tag = e.target.value;
    if (tag === "") {
      return;
    } else if (e.key === "Enter") {
      const updatedRobots = robots.map((robot) => {
        if (robot.id === id) {
          console.log(id);
          if (robot.hasOwnProperty("tags")) {
            console.log(robot.tags);
            robot.tags.push(tag);
            console.log(robot);
            console.log(robots);
            return robot;
          } else {
            console.log("no tags");
            robot.tags = [];
            robot.tags.push(tag);
            //this does actually modify the robots array which is great
            console.log(robots);
            console.log(robot);
            return robot;
          }
        }
        return robot;
      });
      setRobots(updatedRobots);
    }
  };
  const [gradesToggled, setGradesToggled] = useState(false);
  return (
    <div className="robot-card-main-container">
      <div className="robot-card">
        <div className="image-container">
          <img className="robot-profile" src={pic} alt="a student" />
        </div>
        <div className="robot-info-container">
          <div className="robot-meta-container">
            <div>
              <h1>{`${firstName} ${lastName}`}</h1>
            </div>
            <div className="robot-personal-info">
              <p>Email: {email}</p>
              <p>Company: {company}</p>
              <p>Skill: {skill}</p>
              <p>Average:{`${average}%`}</p>
              <input
                onKeyDown={(e) => addTag(e)}
                id="tag-input"
                placeholder="Add a tag"
              />
            </div>
          </div>
        </div>
        <FaPlus onClick={toggleGrades} className="big-plus" />
      </div>
      <div className="grades-container">
        {tags && (
          <div className="tags-container">
            {tags.map((tag, i) => {
              return <span key={i}>{tag}</span>;
            })}
          </div>
        )}

        {gradesToggled ? (
          <ul className="grades-list">
            {grades.map((grade, i) => {
              return (
                <li key={i}>
                  <span>Test {i + 1}:</span> <span>{grade}%</span>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default RobotCard;
