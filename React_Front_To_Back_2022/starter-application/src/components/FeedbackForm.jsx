import React from "react";
import { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Card from "./UIComponents/Card";
import Button from "./UIComponents/Button";
import RatingSelect from "./UIComponents/RatingSelect";

const FeedbackForm = () => {
  const [inputtedFeedback, setInputtedFeedback] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);
  const { addFeedbackItem, feedbackEdit } = useContext(FeedbackContext);

  useEffect(() => {
    console.log("use effect called!");
    if (feedbackEdit.edit) {
      setBtnDisabled(false);
      setInputtedFeedback(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    //good to check on the clientside for input validation
    console.log("handle submit was called");
    if (inputtedFeedback.length <= 10) {
      return;
    }
    const completedFeedback = {
      text: inputtedFeedback,
      rating,
    };
    addFeedbackItem(completedFeedback);
    setInputtedFeedback("");
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
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={handleRating} />
        <div className="input-group">
          <input
            onChange={handleInput}
            type="text"
            placeholder="Leave a review..."
            value={inputtedFeedback}
          />
          <Button
            type="submit"
            isDisabled={btnDisabled}
            version={`${
              inputtedFeedback.length >= 10 || feedbackEdit.edit === true
                ? "primary"
                : "isDisabled"
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
