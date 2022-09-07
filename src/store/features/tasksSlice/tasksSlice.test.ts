import { Task } from "../../../interfaces/interfaces";
import {
  deleteAllAtcionCreator,
  taskReducer,
  uploadDayTasksActionCreator,
} from "./tasksSlice";

describe("Given a tasks slice", () => {
  describe("When its called with an initial state and an action creator", () => {
    const initialTasksState: Task[] = [
      {
        title: "",
        date: "",
        description: "",
        id: "",
        img: "",
        importance: "",
        owner: "",
      },
    ];
    test("Then when called the method deleteAll it should delete all content in the initial state", () => {
      const deleteAlltest = taskReducer(
        initialTasksState,
        deleteAllAtcionCreator()
      );

      expect(deleteAlltest).toStrictEqual([]);
    });
    test("Then when its called whe method uploadDayTask it should return an array of tasks", () => {
      const uploadTasks: Task[] = [
        {
          title: "test-title",
          date: "02/07/2022",
          description: "test-description",
          id: "test-id",
          img: "test-img",
          importance: "test-importance",
          owner: "test-idOwner",
        },
      ];

      const uploadedTasks = taskReducer(
        initialTasksState,
        uploadDayTasksActionCreator(uploadTasks)
      );

      expect(uploadTasks).toStrictEqual(uploadedTasks);
    });
  });
});
