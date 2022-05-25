import React, { useEffect, useState } from "react";

interface NewReminderProps {
  onAddReminder: (title: string) => void;
}

const NewReminder = ({ onAddReminder }: NewReminderProps): JSX.Element => {
  const [title, setTitle] = useState("");
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) {
      alert("Must put in a title of a todo");
      return;
    }
    onAddReminder(title);
    setTitle("");
  };
  useEffect(() => {
    console.log(title);
  }, [title]);
  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <label htmlFor="title"></label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id="title"
        type="text"
        className="form-control"
      />
      <button type="submit" className="btn btn-primary rounded-pill my-3">
        Add Reminder
      </button>
    </form>
  );
};

export default NewReminder;
