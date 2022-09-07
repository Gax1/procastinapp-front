import { renderHook } from "@testing-library/react";

import { Wrapper } from "../../test-utils/Wrapper/Wrapper";
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
