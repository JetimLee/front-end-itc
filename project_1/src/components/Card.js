import React from "react";
import TextArea from "./TextArea";

const Card = (props) => {
  return (
    <div>
      <h1>Card</h1>
      <TextArea
        submitHandler={props.submitHandler}
        handleChange={props.handleChange}
      />
    </div>
  );
};

export default Card;
