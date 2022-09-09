import { renderHook } from "@testing-library/react";
import { Task } from "../../interfaces/interfaces";

import { Wrapper } from "../../test-utils/Wrapper/Wrapper";
import { dateFormater } from "../../utils/dateFormater";
import { uploadDayTasksActionCreator } from "../features/tasksSlice/tasksSlice";
import { openNotificationActionCreator } from "../features/uiSlice/uiSlice";
import { useTasks } from "./tasksHook";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

beforeEach(() => {
  jest.clearAllMocks();
});

const expectedTask = [
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

describe("Given a useTasks getDay function", () => {
  const token = "token-test";
  describe("When its called with an id, a token and a date", () => {
    const id = "test-id";
    test("Then it should return an array of tasks", async () => {
      const date = "02/02/2022";

      const {
        result: {
          current: { getDay },
        },
      } = renderHook(() => useTasks(), { wrapper: Wrapper });

      const tasks = await getDay(id, date, token);

      expect(tasks).toStrictEqual(expectedTask);
    });
  });
  describe("When it called with an invalid id", () => {
    const id = "";
    test("Then it should return an instace of error", async () => {
      const date = "02/02/2022";

      const {
        result: {
          current: { getDay },
        },
      } = renderHook(() => useTasks(), { wrapper: Wrapper });
      const tasks = await getDay(id, date, token);

      expect(tasks).toBeInstanceOf(Error);
    });
  });
  describe("When it receives an empty array", () => {
    test("Then it should show an error", async () => {
      const date = "";
      const id = "test-id";

      const {
        result: {
          current: { getDay },
        },
      } = renderHook(() => useTasks(), { wrapper: Wrapper });
      const tasks = await getDay(id, date, token);

      expect(tasks).toStrictEqual([]);
    });
  });
});

describe("Given a useTasks createTask function", () => {
  describe("When its called with an user id, a task and a token", () => {
    test("Then it should call the dispatch with a succeded error", async () => {
      const id = "test-id";
      const token = "test-token";
      const expectedTask: Task = {
        date: dateFormater(new Date()),
        description: "test-description",
        id: "test-id",
        img: "test-img",
        importance: "very",
        owner: "test-idOwner",
        title: "title-test",
      };

      const formData = new FormData();

      formData.append("title", expectedTask.title);

      const {
        result: {
          current: { createTask },
        },
      } = renderHook(() => useTasks(), { wrapper: Wrapper });

      await createTask(formData, token, id);

      expect(mockDispatch).toHaveBeenCalledWith(
        uploadDayTasksActionCreator([expectedTask])
      );
    });
    test("Then it should call the dispatch method with a succes message", async () => {
      jest.clearAllMocks();

      const id = "test-id";

      const token = "test-token";

      const expectedTask: Task = {
        date: dateFormater(new Date()),
        description: "test-description",
        id: "test-id",
        img: "test-img",
        importance: "very",
        owner: "test-idOwner",
        title: "title-test",
      };

      const formData = new FormData();

      formData.append("description", expectedTask.description);

      const {
        result: {
          current: { createTask },
        },
      } = renderHook(() => useTasks(), { wrapper: Wrapper });

      await createTask(formData, token, id);

      expect(mockDispatch).toHaveBeenCalledWith(
        openNotificationActionCreator("Succeded: task created")
      );
    });
  });
  describe("When it receives an error", () => {
    test("Then it shoul call the dispatch with an error string", async () => {
      const id = "test-id";
      const token = "test-token";
      const formData = new FormData();

      const {
        result: {
          current: { createTask },
        },
      } = renderHook(() => useTasks(), { wrapper: Wrapper });

      await createTask(formData, token, id);

      expect(mockDispatch).toHaveBeenCalledWith(
        openNotificationActionCreator("Error creating the task")
      );
    });
  });
});
