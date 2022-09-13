import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TaskForm from "../../components/TaskForm/TaskForm";
import { Task } from "../../interfaces/interfaces";
import { useTasks } from "../../store/hooks/tasksHook";
import { RootState } from "../../store/store";

export const ModifyTask = (): JSX.Element => {
  const initialTask: Task = {
    date: "",
    description: "",
    id: "",
    img: "",
    importance: "",
    owner: "",
    title: "",
    backUpImg: "",
  };
  const { token } = useSelector((state: RootState) => state.user);
  const { id } = useParams();
  const { getTaskById, editTask } = useTasks();

  const [task, setTask] = useState(initialTask);

  useEffect(() => {
    (async () => {
      const { myTask } = await getTaskById(id as string, token);
      setTask(myTask);
    })();
  }, [id, token, getTaskById]);

  return (
    <TaskForm
      buttonText="Update"
      navigation={`/my-task/${id}`}
      sendData={editTask}
      initialData={task}
    />
  );
};
