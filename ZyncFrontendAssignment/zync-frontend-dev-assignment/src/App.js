import "./App.css";
import RobotList from "./components/RobotList";
import { RobotListProvider } from "./context/RobotListContext";

function App() {
  return (
    <RobotListProvider>
      <RobotList></RobotList>
    </RobotListProvider>
  );
}

export default App;
