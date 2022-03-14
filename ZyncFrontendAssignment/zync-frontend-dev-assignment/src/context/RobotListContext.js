import { createContext, useState } from "react";

const RobotListContext = createContext();

export const RobotListProvider = ({ children }) => {
  const [robots, setRobots] = useState([]);
  const [searchedRobots, setSearchedRobots] = useState([]);
  //todo - write function that looks for the tags property, this will only be present on objects that have had tags added to them. The tags themselves will live inside of an array.
  const filterRobots = (e) => {
    const inputtedValue = e.target.value.toLowerCase();
    const filteredRobots = robots.filter((robot) => {
      if (inputtedValue === "") {
        return robot;
      } else if (robot.firstName.toLowerCase().includes(inputtedValue)) {
        return robot;
      } else if (robot.lastName.toLowerCase().includes(inputtedValue)) {
        return robot;
      }
    });
    setSearchedRobots(filteredRobots);
  };
  const filterRobotTags = (e) => {
    console.log("filtering by robot tags");
    const inputtedTag = e.target.value.toLowerCase();

    const filteredRobotsByTag = robots.filter((robot) => {
      if (inputtedTag === "") {
        return robot;
      } else if (robot.hasOwnProperty("tags")) {
        const foundTags = robot.tags.find((tag) => tag.includes(inputtedTag));
        console.log(foundTags);
        console.log("what was found");
        if (robot.tags.includes(foundTags)) {
          return robot;
        }
      }
    });
    setSearchedRobots(filteredRobotsByTag);
  };
  return (
    <RobotListContext.Provider
      value={{
        robots,
        setRobots,
        searchedRobots,
        filterRobots,
        setSearchedRobots,
        filterRobotTags,
      }}
    >
      {children}
    </RobotListContext.Provider>
  );
};

export default RobotListContext;
