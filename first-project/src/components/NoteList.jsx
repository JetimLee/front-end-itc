import React from "react";
import NoteCard from "./NoteCard";

const NoteList = ({ notes, setNotes }) => {
  console.log("notelist");
  console.log(notes);
  // console.log(setNotes);

  return (
    <div>
      <div className="note-container">
        <ul className="note-list">
          {notes.map((el, i) => {
            return (
              <NoteCard
                wholeNote={el}
                notes={notes}
                setNotes={setNotes}
                id={el.id}
                title={el.noteTitle}
                key={i}
                note={el.note}
                date={el.dateCreated}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NoteList;
