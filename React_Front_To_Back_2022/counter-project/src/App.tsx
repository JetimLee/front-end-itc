import { CounterProvider } from "./context/CounterContext";
import { Counter } from "./components/counter";

function App() {
  return (
    <CounterProvider>
      <div className="App">
        <h1>Hello</h1>
        <Counter />
      </div>
    </CounterProvider>
  );
}

export default App;
