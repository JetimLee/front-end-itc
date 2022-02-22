import React from "react";
import { useState } from "react";
import Card from "./UIComponents/Card";
import Button from "./UIComponents/Button";

const FeedbackForm = () => {
  const [inputtedFeedback, setInputtedFeedback] = useState("");
  const handleInput = (e) => {
    // console.log(e.target.value);
    setInputtedFeedback(e.target.value);
  };
  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        <div className="input-group">
          <input
            onChange={handleInput}
            type="text"
            placeholder="Write a review..."
          />
          <Button
            type="submit"
            version={`${
              inputtedFeedback.length >= 10 ? "primary" : "isDisabled"
            }`}
          >
            Submit
          </Button>
        </div>
        <div>
          <p>Characters entered: {inputtedFeedback.length}</p>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
