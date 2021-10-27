import React from "react";
import NoteCard from "./NoteCard";

const NoteList = ({ notes }) => {
  console.log(notes);
  return (
    <div>
      <div className="note-container">
        <ul className="note-list">
          {notes.map((el, i) => {
            return (
              <NoteCard
                id={el.id}
                title={el.noteTitle}
                key={i}
                note={el.note}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NoteList;
