import { TasksRepository } from "../../repositories/TasksRepository";
import { uploadDayTasksActionCreator } from "../features/tasksSlice/tasksSlice";
import {
  openLoadingActionCreator,
  openNotificationActionCreator,
} from "../features/uiSlice/uiSlice";
import { useAppDispatch } from "./hooks";

export const useTasks = () => {
  const url = process.env.REACT_APP_APIURL as string;

  const repoTasks = new TasksRepository(url);

  const dispatch = useAppDispatch();

  const getDay = async (id: string, date: string, token: string) => {
    try {
      dispatch(openLoadingActionCreator());
      const { tasks } = await repoTasks.getDay(id, date, token);
      if (tasks.length !== 0) {
        dispatch(uploadDayTasksActionCreator(tasks));
        dispatch(openNotificationActionCreator("Succeded: tasks uploaded"));
      }
      dispatch(
        openNotificationActionCreator("Error: there is no tasks for today")
      );

      return tasks;
    } catch (error) {
      dispatch(openNotificationActionCreator("Error uploading the tasks"));
      return error;
    }
  };

  return { getDay };
};
