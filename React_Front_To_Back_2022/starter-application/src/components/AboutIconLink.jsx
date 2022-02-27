import React from "react";
import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";
//any internal link you want to use Link, otherwise you can use an a tag

const AboutIconLink = () => {
  return (
    <div className="about-link">
      <Link to={"/about"}>
        <FaQuestion size={30} />
      </Link>
    </div>
  );
};

export default AboutIconLink;
