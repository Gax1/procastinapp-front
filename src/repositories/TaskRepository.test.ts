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
        date: "09/05/2022",
        description: "test-description",
        id: "test-id",
        img: "test-img",
        importance: "very",
        owner: "test-idOwner",
        title: "title-test",
      };

      const formData = new FormData();
      const username = "username-test";

      formData.append("username", username);

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
