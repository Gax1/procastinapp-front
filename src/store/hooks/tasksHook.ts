import { useCallback } from "react";
import { useSelector } from "react-redux";
import { TasksRepository } from "../../repositories/TasksRepository";
import { uploadDayTasksActionCreator } from "../features/tasksSlice/tasksSlice";
import {
  closeLoadingActionCreator,
  openLoadingActionCreator,
  openNotificationActionCreator,
} from "../features/uiSlice/uiSlice";
import { RootState } from "../store";
import { useAppDispatch } from "./hooks";

export const useTasks = () => {
  const url = process.env.REACT_APP_APIURL as string;

  const { day, tasks } = useSelector((state: RootState) => state);

  const dispatch = useAppDispatch();

  const getDay = useCallback(
    async (id: string, date: string, token: string) => {
      try {
        dispatch(openLoadingActionCreator());

        const repoTasks = new TasksRepository(url);

        const { tasks } = await repoTasks.getDay(id, date, token);

        if (!tasks) {
          throw new Error();
        }

        dispatch(uploadDayTasksActionCreator(tasks));

        dispatch(closeLoadingActionCreator());
        return tasks;
      } catch (error) {
        dispatch(openNotificationActionCreator("Error uploading the tasks"));
        return error;
      }
    },
    [dispatch, url]
  );

  const createTask = async (task: FormData, token: string, userId: string) => {
    dispatch(openLoadingActionCreator());

    const repoTasks = new TasksRepository(url);

    try {
      const { task: newTask } = await repoTasks.createTask(task, token, userId);

      if (newTask.date === day) {
        dispatch(uploadDayTasksActionCreator([...tasks, newTask]));
      }
      dispatch(openNotificationActionCreator("Succeded: task created"));

      return;
    } catch (error) {
      dispatch(openNotificationActionCreator("Error creating the task"));

      return;
    }
  };

  return { getDay, createTask };
};
