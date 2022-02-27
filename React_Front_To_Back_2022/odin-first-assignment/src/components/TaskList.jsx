import React from "react";
import "./TaskList.css";

const TaskList = ({ tasks }) => {
  return (
    <div className="task-list">
      {tasks.map((el, index) => {
        return <p key={index}>{el}</p>;
      })}
    </div>
  );
};

export default TaskList;
