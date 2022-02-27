import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/UIComponents/Card";
const About = () => {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>
          This is a silly app that allows you to leave feedback for a product,
          service or class
        </p>
        <p>
          <Link to={"/"}> Go to homepage</Link>
        </p>
      </div>
    </Card>
  );
};

export default About;
