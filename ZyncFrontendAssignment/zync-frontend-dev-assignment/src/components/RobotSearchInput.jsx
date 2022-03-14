import React, { useContext } from "react";
import "./RobotSearchInput.css";
import RobotListContext from "../context/RobotListContext";

const RobotSearchInput = () => {
  const { filterRobots } = useContext(RobotListContext);

  return (
    <div className="search-bar-container">
      <input
        onChange={(e) => filterRobots(e)}
        type="text"
        placeholder="Search by name"
        aria-label="Search bar"
      />
    </div>
  );
};

export default RobotSearchInput;
