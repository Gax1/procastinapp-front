import axios from "axios";
import { ITasksRepository, Item } from "../interfaces/interfaces";

export class TasksRepository<Task extends Item>
  implements ITasksRepository<Task>
{
  constructor(public url: string) {}

  getDay = async (id: string, date: string) => {
    try {
      const { data } = await axios.get(`${this.url}/tasks/my-day`, {
        params: { id: id, date: date },
      });
      return data;
    } catch (error) {
      return error;
    }
  };
}
