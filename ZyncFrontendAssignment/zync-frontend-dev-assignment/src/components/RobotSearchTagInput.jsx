import React, { useContext } from "react";
import "./RobotSearchInput.css";
import RobotListContext from "../context/RobotListContext";

const RobotSearchInputTagInput = () => {
  const { filterRobotTags } = useContext(RobotListContext);
  return (
    <div className="search-bar-container">
      <input
        onChange={(e) => filterRobotTags(e)}
        type="text"
        placeholder="Search by tag"
        aria-label="Search bar"
      />
    </div>
  );
};

export default RobotSearchInputTagInput;
