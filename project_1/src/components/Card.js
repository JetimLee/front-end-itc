import React from "react";
import TextArea from "./TextArea";

const Card = (props) => {
  return (
    <div>
      <TextArea
        handleTitle={props.handleTitle}
        submitHandler={props.submitHandler}
        handleChange={props.handleChange}
      />
    </div>
  );
};

export default Card;
