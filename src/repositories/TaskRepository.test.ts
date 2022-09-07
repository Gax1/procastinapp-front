import { Task } from "../interfaces/interfaces";
import { TasksRepository } from "./TasksRepository";

const url = process.env.REACT_APP_APIURL as string;
const tasksRepo = new TasksRepository(url);

describe("Given a Tasks Repository", () => {
  const task: Task[] = [
    {
      date: "09/05/2022",
      description: "test-description",
      id: "test-id",
      img: "test-img",
      importance: "very",
      owner: "test-idOwner",
      title: "title-test",
    },
  ];
  const date = "09/05/2022";
  describe("Given a getDay method", () => {
    describe("When its called with a valid id and date", () => {
      test("Then it should return an array of task", async () => {
        const id = "test-id";

        const tasks = await tasksRepo.getDay(id, date);

        expect(task).toStrictEqual(tasks);
      });
    });
    describe("When its called with an invalid id and date", () => {
      test("Then it should return an error", async () => {
        const id = "";

        const tasks = await tasksRepo.getDay(id, date);

        expect(tasks).toBeInstanceOf(Error);
      });
    });
  });
});
