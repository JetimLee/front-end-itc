import TaskList from "./components/TaskList";
import CreateTask from "./components/CreateTask";
import { useState } from "react";
import "./App.css";
function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleInput = (e) => {
    setNewTask(e.target.value);
    console.log(newTask);
  };
  const addTask = (task) => {
    let updatedTasks = tasks.map((oldTasks) => {
      return oldTasks;
    });
    updatedTasks.push(task);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <CreateTask
        newTask={newTask}
        addTask={addTask}
        handleInput={handleInput}
      />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
