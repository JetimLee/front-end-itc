import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//hash router uses the hash tags, whereas browseroruter is the most common

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./pages/About";
import { FeedbackProvider } from "./context/FeedbackContext";
import AboutIconLink from "./components/AboutIconLink";
const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/about" element={<About />} />
              <Route
                exact
                path="/"
                element={
                  <>
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedbackList />
                    <AboutIconLink />
                  </>
                }
              ></Route>
            </Routes>
          </div>
        </>
      </Router>
    </FeedbackProvider>
  );
};

export default App;
