import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { UseRefExample } from "./components/useRefExample";
import { UseRefExample2 } from "./components/useRefExample2";
import { UseRefExample3 } from "./components/UseRefExample3";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <UseRefExample2 />
      <h1>Vite + React</h1>
      <UseRefExample />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <UseRefExample3 />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
