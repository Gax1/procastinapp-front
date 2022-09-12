import axios from "axios";
import { ITasksRepository, Item } from "../interfaces/interfaces";

export class TasksRepository<Task extends Item>
  implements ITasksRepository<Task>
{
  constructor(public url: string) {}

  getDay = async (id: string, date: string, token: string) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
      params: { id: id, date: date },
    };

    try {
      const { data } = await axios.get(`${this.url}/tasks/my-day`, config);
      return data;
    } catch (error) {
      return error;
    }
  };

  createTask = async (task: FormData, token: string, userId: string) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
      params: { id: userId },
    };

    try {
      const { data } = await axios.post(
        `${this.url}/tasks/my-day`,
        task,
        config
      );
      return data;
    } catch (error) {
      return error;
    }
  };

  deleteTask = async (id: string, token: string) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
      params: { id: id },
    };
    try {
      const { data } = await axios.delete(`${this.url}/tasks/my-day`, config);
      return data;
    } catch (error) {
      return error;
    }
  };

  getTaskById = async (id: string, token: string) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      const { data } = await axios.get(
        `${this.url}/tasks/my-task/${id}`,
        config
      );
      return data;
    } catch (error) {
      return error;
    }
  };
}
