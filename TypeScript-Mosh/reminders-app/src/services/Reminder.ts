import axios from "axios";
import Reminder from "../models/Reminder";

class ReminderService {
  http = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
  });
  async getReminders() {
    const response = await this.http.get<Reminder[]>("/todos");
    return response.data;
  }
  async addReminder(title: string) {
    const response = await this.http.post<Reminder>("/todos", { title });
    return response.data;
  }
  async removeReminder(id: number) {
    const response = await this.http.delete(`/todos/${id}`);
    return response.data;
  }
}

//doing this so that the consumers of this service don't have to initialize a new version of the service each time
export default new ReminderService();
