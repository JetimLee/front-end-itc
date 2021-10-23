import React from "react";
import "./NoteCard.module.css";

const NoteCard = (props) => {
  return (
    <div className="note__card">
      <p>{props.text}</p>
    </div>
  );
};

export default NoteCard;
