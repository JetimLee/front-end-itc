import React, { useEffect, useState } from "react";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/Reminder";
import reminderService from "./services/Reminder";
import NewReminder from "./components/NewReminder";
import "./App.css";
function App() {
  const randomId = () => {
    return Math.round(Math.random() * 10000);
  };
  const [reminders, setReminders] = useState<Reminder[]>([]);
  useEffect(() => {
    handleGetReminders();
  }, []);
  const handleGetReminders = async () => {
    const reminders = await reminderService.getReminders();
    setReminders(reminders);
  };
  const deleteReminders = (id: number): void => {
    const newReminders = reminders.filter((reminder) => reminder.id !== id);
    setReminders(newReminders);
  };
  const addReminder = async (reminderTitle: string) => {
    const newReminder = await reminderService.addReminder(reminderTitle);
    setReminders([newReminder, ...reminders]);
  };
  //to do - add ability to edit a todo

  //can also do this
  const [loading, setIsLoading] = useState(true);

  return (
    <div className="App">
      <NewReminder onAddReminder={addReminder} />
      <ReminderList items={reminders} onRemoveReminder={deleteReminders} />
    </div>
  );
}

export default App;
