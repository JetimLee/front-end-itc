import React from "react";
import { useState } from "react";
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
        <FeedbackForm />

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
