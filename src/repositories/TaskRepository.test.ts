import { dateFormater } from "../utils/dateFormater";
import { TasksRepository } from "./TasksRepository";

const url = process.env.REACT_APP_APIURL as string;
const tasksRepo = new TasksRepository(url);

describe("Given a Tasks Repository", () => {
  const task = {
    tasks: [
      {
        date: "09/05/2022",
        description: "test-description",
        id: "test-id",
        img: "test-img",
        importance: "very",
        owner: "test-idOwner",
        title: "title-test",
      },
    ],
  };
  const date = "09/05/2022";
  const token = "test-token";

  describe("Given a getDay method", () => {
    describe("When its called with a valid id and date", () => {
      test("Then it should return an array of task", async () => {
        const id = "test-id";

        const tasks = await tasksRepo.getDay(id, date, token);

        expect(task).toStrictEqual(tasks);
      });
    });
    describe("When its called with an invalid id and date", () => {
      test("Then it should return an error", async () => {
        const id = "";

        const tasks = await tasksRepo.getDay(id, date, token);

        expect(tasks).toBeInstanceOf(Error);
      });
    });
  });
});

describe("Given the create task method", () => {
  const token = "test-token";
  const userId = "test-userId";
  describe("When its called with an form data valid", () => {
    test("Then it should return a task", async () => {
      const newtask = {
        date: dateFormater(new Date()),
        description: "test-description",
        id: "test-id",
        img: "test-img",
        importance: "very",
        owner: "test-idOwner",
        title: "title-test",
      };

      const formData = new FormData();
      const title = "title-test";

      formData.append("title", title);

      const response = await tasksRepo.createTask(formData, token, userId);

      expect(response).toStrictEqual({ task: newtask });
    });
  });
  describe("When its called with an invalid form data", () => {
    test("Then it should return an instance of error", async () => {
      const formData = new FormData();

      const response = await tasksRepo.createTask(formData, token, userId);

      expect(response).toBeInstanceOf(Error);
    });
  });
});

describe("Given a delete task method", () => {
  describe("When called with a token and an id", () => {
    test("Then it should return a message of error", async () => {
      const id = "test-id";
      const token = "test-token";
      const expectedResponse = {
        Message: "Tasks has been succesfully deleted",
      };

      const response = await tasksRepo.deleteTask(id, token);

      expect(response).toStrictEqual(expectedResponse);
    });
  });
  describe("When its called with an empty token", () => {
    test("Then it should response an instance of error", async () => {
      const id = "";
      const token = "test-token";

      const response = await tasksRepo.deleteTask(id, token);

      expect(response).toBeInstanceOf(Error);
    });
  });
});
