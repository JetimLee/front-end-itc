import { useState, useEffect } from "react";
import { useContext } from "react";
import RobotListContext from "../context/RobotListContext";
import RobotCard from "./RobotCard";
import RobotSearchInput from "./RobotSearchInput";
import RobotSearchInputTagInput from "./RobotSearchTagInput";
import "./RobotList.css";

const RobotList = () => {
  const { searchedRobots, robots, setRobots, setSearchedRobots } =
    useContext(RobotListContext);
  const calcAverage = (arr) => {
    if (Array.isArray(arr)) {
      let sum = arr.reduce((acc, cur) => {
        let accAsNum = parseFloat(acc);
        let curAsNum = parseFloat(cur);
        return accAsNum + curAsNum;
      }, 0);
      let average = sum / arr.length;
      return average.toFixed(3);
    } else {
      console.log("incorrect data type given to calc average");
    }
  };
  const robotsUrl = "https://api.hatchways.io/assessment/students";

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const { students } = data;
        setRobots(students);
        setSearchedRobots(students);
        console.log(students);
        console.log(robots);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData(robotsUrl);
    //double check the empty array vs no array vs with value here
  }, []);

  return (
    <div className="height-container">
      <div className="robot-list-main-container">
        <div className="robot-list-container">
          <RobotSearchInput />
          <RobotSearchInputTagInput />
          {searchedRobots &&
            searchedRobots.map((robot) => {
              const {
                city,
                company,
                email,
                firstName,
                grades,
                id,
                lastName,
                pic,
                skill,
                tags,
              } = robot;
              return (
                <RobotCard
                  tags={tags}
                  key={id}
                  city={city}
                  company={company}
                  email={email}
                  firstName={firstName}
                  grades={grades}
                  id={id}
                  lastName={lastName}
                  pic={pic}
                  skill={skill}
                  average={calcAverage(grades)}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default RobotList;
