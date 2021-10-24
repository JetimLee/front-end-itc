import React, { useState } from "react";
import "./Container.css";
import Card from "./Card";
import NoteCard from "./NoteCard";

const Container = () => {
  let deleteNote = (value) => {
    console.log("deleting");
    let question = window.confirm("Are you sure you want to delete?");
    if (question) {
      let noteToDelete = notes.splice(value, 1);
      setNotes(
        notes.filter((el) => {
          return el !== noteToDelete;
        })
      );
    }
  };
  let handleChange = (e) => {
    setNote(e.target.value);
  };
  let convertDate = (dateTimeInMiliseconds) => {
    let fullDate = new Date(dateTimeInMiliseconds).toLocaleString("en-US", {
      timeZone: "Israel",
    });
    console.log(fullDate);
    return fullDate;
  };

  let current = new Date().getTime();
  let submitHandler = () => {
    setNotes([note, ...notes]);
    setDate(current);
    setDates([...dates, current]);
    // console.log("this is notes");
    // console.log(notes);
  };

  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [date, setDate] = useState({});
  const [dates, setDates] = useState([]);
  console.log("this is dates");
  console.log(dates);
  console.log("this is date");
  console.log(date);
  return (
    <div className="container">
      <Card submitHandler={submitHandler} handleChange={handleChange} />
      <div className="noteCardContainer">
        {notes.map((el, i) => {
          return (
            <NoteCard
              deleteNote={deleteNote}
              text={notes[i]}
              id={i}
              key={i}
              dateProp={convertDate(dates[i])}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Container;
