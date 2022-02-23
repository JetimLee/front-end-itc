import React from "react";
import { useState } from "react";
import Card from "./UIComponents/Card";
import Button from "./UIComponents/Button";
import RatingSelect from "./UIComponents/RatingSelect";

const FeedbackForm = ({ addFeedbackItem }) => {
  const [inputtedFeedback, setInputtedFeedback] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

  const handleSubmit = (e) => {
    //good to check on the clientside for input validation
    console.log("handle submit was called");
    if (inputtedFeedback.length <= 10) {
      return;
    }
    e.preventDefault();
    const completedFeedback = {
      text: inputtedFeedback,
      rating,
    };
    addFeedbackItem(completedFeedback);
  };

  const handleRating = (rating) => {
    console.log("handle rating called");
    console.log(rating);
    //setting the rating here, actual rating is being received in rating select
    setRating(rating);
  };
  const handleInput = (e) => {
    setInputtedFeedback(e.target.value);
    if (inputtedFeedback === "") {
      setMessage(null);
      setBtnDisabled(true);
    } else if (inputtedFeedback !== "" && inputtedFeedback.length <= 10) {
      setBtnDisabled(true);
      setMessage("Message must be at least 10 characters");
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    // console.log(e.target.value);
  };
  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={handleRating} />
        <div className="input-group">
          <input
            onChange={handleInput}
            type="text"
            placeholder="Write a review..."
          />
          <Button
            handleSubmit={handleSubmit}
            type="submit"
            isDisabled={btnDisabled}
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
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
