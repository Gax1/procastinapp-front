import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TaskForm from "../../components/TaskForm/TaskForm";
import { uploadTaskActionCreator } from "../../store/features/detailsTaskSlice/detailsTaskSlice";
import { useAppDispatch } from "../../store/hooks/hooks";
import { useTasks } from "../../store/hooks/tasksHook";
import { RootState } from "../../store/store";

export const ModifyTask = (): JSX.Element => {
  const {
    task,
    user: { token },
  } = useSelector((state: RootState) => state);
  const { id } = useParams();
  const { getTaskById, editTask } = useTasks();
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const { myTask } = await getTaskById(id as string, token);
      dispatch(uploadTaskActionCreator(myTask));
    })();
  }, [id, token, dispatch, getTaskById]);

  return (
    <TaskForm
      buttonText="Update"
      navigation={`/my-task/${id}`}
      sendData={editTask}
      initialData={task}
      id={task.id}
    />
  );
};
