import "./App.css";
import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const handleNext = () => {
    if (currentStep + 1 > 3) return;
    setCurrentStep((s) => s + 1);
  };
  const handlePrevious = () => {
    if (currentStep - 1 <= 0) return;
    setCurrentStep((s) => s - 1);
  };
  return (
    <div className="steps">
      <div className="numbers">
        <div className={currentStep >= 1 ? "active" : ""}>1</div>
        <div className={currentStep >= 2 ? "active" : ""}>2</div>
        <div className={currentStep >= 3 ? "active" : ""}>3</div>
      </div>
      <p className="message">
        Step {currentStep}: {messages[currentStep - 1]}
      </p>
      <div className="buttons">
        <button
          onClick={handlePrevious}
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
        >
          Previous
        </button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default App;
