import React from "react";
import "./NoteCard.css";

const NoteCard = ({ note, title }) => {
  return (
    <div className="noteCard">
      {title !== "" ? <h2>Title: {title}</h2> : null}
      <li className="note">Note: {note}</li>
      <button className="deleteBtn">Delete note</button>
    </div>
  );
};

export default NoteCard;
