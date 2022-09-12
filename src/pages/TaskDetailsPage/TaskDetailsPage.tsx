import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DetailsTask } from "../../components/DetailsTask/DetailsTask";
import { Header } from "../../components/Header/Header";
import { Task } from "../../interfaces/interfaces";
import { useTasks } from "../../store/hooks/tasksHook";
import { RootState } from "../../store/store";
import { TaskDetailsPageStyled } from "./TaskDetailsPageStyled";

export const TaskDetailsPage = (): JSX.Element => {
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
  const { getTaskById } = useTasks();

  const [task, setTask] = useState(initialTask);

  useEffect(() => {
    (async () => {
      const { myTask } = await getTaskById(id as string, token);
      setTask(myTask);
    })();
  }, [id, token, getTaskById]);

  return (
    <>
      <Header />
      <TaskDetailsPageStyled>
        <DetailsTask task={task} />
      </TaskDetailsPageStyled>
    </>
  );
};
