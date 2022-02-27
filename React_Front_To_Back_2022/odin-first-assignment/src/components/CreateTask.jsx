import React from "react";

import "./CreateTask.css";
const CreateTask = ({ handleInput, addTask, newTask }) => {
  return (
    <div className="create-task">
      <>
        <h1>Create a task</h1>
        <div className="form-controls">
          <input
            onChange={(e) => handleInput(e)}
            type="text"
            placeholder="Add a task..."
          />
          <button onClick={() => addTask(newTask)} className="btn btn-primary">
            Add Task
          </button>
        </div>
      </>
    </div>
  );
};

export default CreateTask;
