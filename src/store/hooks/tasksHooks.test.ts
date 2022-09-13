import { renderHook } from "@testing-library/react";
import { Task } from "../../interfaces/interfaces";

import { MockedWrapper, Wrapper } from "../../test-utils/Wrapper/Wrapper";
import { dateFormater } from "../../utils/dateFormater";
import { uploadDayTasksActionCreator } from "../features/tasksSlice/tasksSlice";
import {
  closeLoadingActionCreator,
  openNotificationActionCreator,
} from "../features/uiSlice/uiSlice";
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
      } = renderHook(() => useTasks(), { wrapper: MockedWrapper });
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

      await createTask(id, token, formData);

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

      await createTask(id, token, formData);

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

      await createTask(id, token, formData);

      expect(mockDispatch).toHaveBeenCalledWith(
        openNotificationActionCreator("Error creating the task")
      );
    });
  });
});

describe("Given a delete task in useTasks hook", () => {
  describe("When called with an id, token and isDone true", () => {
    test("Then it should dispatch the succed notification", async () => {
      jest.clearAllMocks();
      const id = "test-id";
      const token = "test-token";
      const isDone = true;

      const {
        result: {
          current: { deleteTask },
        },
      } = renderHook(() => useTasks(), { wrapper: Wrapper });

      await deleteTask(id, token, isDone);

      expect(mockDispatch).toHaveBeenCalledTimes(3);
    });
    describe("When called with an id, token and isDone false", () => {
      test("then it should dispatch with notification delete task", async () => {
        const id = "test-id";
        const token = "test-token";
        const isDone = false;

        const {
          result: {
            current: { deleteTask },
          },
        } = renderHook(() => useTasks(), { wrapper: Wrapper });

        await deleteTask(id, token, isDone);

        expect(mockDispatch).toHaveBeenCalledWith(
          openNotificationActionCreator("Task deleted")
        );
      });
    });
    describe("When it receives an error", () => {
      test("Then it should return an error", async () => {
        const id = "";
        const token = "test-token";
        const isDone = false;

        const {
          result: {
            current: { deleteTask },
          },
        } = renderHook(() => useTasks(), { wrapper: Wrapper });

        const response = await deleteTask(id, token, isDone);

        expect(response).toBeInstanceOf(Error);
      });
    });
  });
});

describe("Given a getTaskById in useTasks hook", () => {
  describe("When its called with a valid id and token", () => {
    test("Then it should return a new task", async () => {
      jest.clearAllMocks();
      const expectedTask = {
        myTask: {
          date: "09/05/2022",
          description: "test-description",
          id: "test-id",
          img: "test-img",
          importance: "very",
          owner: "test-idOwner",
          title: "title-test",
        },
      };
      const id = "test-id";
      const token = "test-token";
      const {
        result: {
          current: { getTaskById },
        },
      } = renderHook(() => useTasks(), { wrapper: Wrapper });

      const response = await getTaskById(id, token);

      expect(response).toStrictEqual(expectedTask);
    });
  });
  describe("When it receives an empty id", () => {
    test("Then it should return an instace of error", async () => {
      const id = "";
      const token = "test-token";
      const {
        result: {
          current: { getTaskById },
        },
      } = renderHook(() => useTasks(), { wrapper: Wrapper });

      const response = await getTaskById(id, token);
      expect(response).toBeInstanceOf(Error);
    });
  });
});

describe("Given a editTask in useTask hook", () => {
  beforeEach(() => jest.clearAllMocks());
  describe("When its called with an edited task, an id and a token", () => {
    test("Then it should call the dispatch method", async () => {
      const id = "test-id";

      const token = "test-token";

      const formData = new FormData();
      formData.append("title", "title-test");

      const {
        result: {
          current: { editTask },
        },
      } = renderHook(() => useTasks(), { wrapper: Wrapper });

      await editTask(id, token, formData);

      expect(mockDispatch).toHaveBeenCalledWith(closeLoadingActionCreator());
    });
  });
  describe("When it receives an empty form data", () => {
    test("Then it should return an error", async () => {
      const id = "test-id";

      const token = "test-token";

      const formData = new FormData();
      const {
        result: {
          current: { editTask },
        },
      } = renderHook(() => useTasks(), { wrapper: Wrapper });

      await editTask(id, token, formData);

      expect(mockDispatch).toHaveBeenCalledWith(
        openNotificationActionCreator("Error editing that task")
      );
    });
  });
});
