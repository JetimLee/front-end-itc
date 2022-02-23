import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
const App = () => {
  const [feedBack, setFeedback] = useState([
    {
      id: 35,
      rating: 10,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
    },
    {
      id: 24,
      rating: 9,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
    },
    {
      id: 69,
      rating: 8,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
    },
  ]);
  const addFeedbackItem = (feedback) => {
    feedback.id = uuidv4();
    console.log("adding a feedback item");
    console.log("here is the feedback object");
    console.log(feedback);
    const updatedFeedback = feedBack.map((feedback) => {
      return feedback;
    });
    updatedFeedback.push(feedback);
    setFeedback(updatedFeedback);
  };
  const deleteFeedbackItem = (id) => {
    console.log("clicked delete item");
    const updatedFeedbackList = feedBack.filter((feedbackItem) => {
      return feedbackItem.id !== id;
    });
    setFeedback(updatedFeedbackList);
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm addFeedbackItem={addFeedbackItem} />

        <FeedbackStats feedBack={feedBack} />
        <FeedbackList
          deleteFeedbackItem={deleteFeedbackItem}
          feedBack={feedBack}
        />
      </div>
    </>
  );
};

export default App;
