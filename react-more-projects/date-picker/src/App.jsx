import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const event = new Date(Date.now());
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  //how to set a new date
  // event.setDate(new Date().getDate() + count);

  const [selectedDate, setSelectedDate] = useState(
    event.toLocaleDateString(undefined, options)
  );

  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const increaseStep = () => {
    setStep((s) => s + 1);
  };
  const decreaseStep = () => {
    setStep((s) => s - 1);
  };
  const increaseCount = () => setCount((c) => c + step);
  const decreaseCount = () => setCount((c) => c - step);
  const handleDate = () => {
    const newDate = new Date(Date.now());
    newDate.setDate(new Date().getDate() + count);
    const dateActual = newDate.toLocaleDateString(undefined, options);
    setSelectedDate(dateActual);
  };
  useEffect(() => {
    handleDate();
  }, [count]);
  return (
    <>
      <div className="container">
        <div className="button-container">
          <button onClick={decreaseStep}>-</button>
          <p>Step:{step} </p>
          <button onClick={increaseStep}>+</button>
        </div>
        <div className="button-container">
          <button onClick={decreaseCount}>-</button>
          <p>Count:{count} </p>
          <button onClick={increaseCount}>+</button>
        </div>
        <div>
          {count >= 0 ? (
            <p>
              {count >= 1
                ? `${count} ${
                    count > 1 ? "days" : "day"
                  } from now is ${selectedDate}`
                : `Today is ${selectedDate}`}
            </p>
          ) : (
            <p>
              {`${
                Math.abs(count) > 1
                  ? `${Math.abs(count)} days ago`
                  : "Yesterday"
              } was
               ${selectedDate}`}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
