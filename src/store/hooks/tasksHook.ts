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

  const deleteTask = async (id: string, token: string, isDone: boolean) => {
    dispatch(openLoadingActionCreator());
    const repoTasks = new TasksRepository(url);

    try {
      const response = await repoTasks.deleteTask(id, token);
      if (response instanceof Error) {
        throw new Error(response.message);
      }
      const newTasks = tasks.filter((task) => task.id !== id);
      dispatch(uploadDayTasksActionCreator(newTasks));
      if (isDone) {
        dispatch(
          openNotificationActionCreator(
            "Succeded: congratulation on finishing that task"
          )
        );
      } else {
        dispatch(openNotificationActionCreator("Task deleted"));
      }
      return response;
    } catch (error) {
      dispatch(openNotificationActionCreator("Error deleting the task"));
      return error;
    }
  };

  const getTaskById = useCallback(
    async (id: string, token: string) => {
      dispatch(openLoadingActionCreator());
      const repoTasks = new TasksRepository(url);
      try {
        const myTask = await repoTasks.getTaskById(id, token);
        if (myTask instanceof Error) {
          throw new Error(myTask.message);
        }
        dispatch(closeLoadingActionCreator());
        return myTask;
      } catch (error) {
        dispatch(openNotificationActionCreator("Error uploading that task"));
        return error;
      }
    },
    [dispatch, url]
  );

  return { getDay, createTask, deleteTask, getTaskById };
};
