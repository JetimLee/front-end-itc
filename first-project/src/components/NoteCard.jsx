import React from "react";
import "./NoteCard.css";

const NoteCard = ({ wholeNote, note, title, date, setNotes, notes }) => {
  // console.log(setNotes);
  const deleteHandler = () => {
    // console.log(wholeNote.id);
    setNotes(
      notes.filter((el) => {
        return el.id !== wholeNote.id;
      })
    );
    console.log(`deleting`);
  };

  return (
    <div className="noteCard">
      {title !== "" ? <h2>Title: {title}</h2> : null}
      <li className="note">Note: {note}</li>
      <p>{date}</p>
      <button onClick={() => deleteHandler()} className="deleteBtn">
        Delete note
      </button>
    </div>
  );
};

export default NoteCard;
