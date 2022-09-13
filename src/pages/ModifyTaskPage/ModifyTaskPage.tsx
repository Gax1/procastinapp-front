import { faReply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import TaskForm from "../../components/TaskForm/TaskForm";
import { uploadTaskActionCreator } from "../../store/features/detailsTaskSlice/detailsTaskSlice";
import { useAppDispatch } from "../../store/hooks/hooks";
import { useTasks } from "../../store/hooks/tasksHook";
import { RootState } from "../../store/store";
import { ModifyTaskStyled } from "./ModifyTaskStyledPage";

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
    <ModifyTaskStyled>
      <Header />
      <div className="page-heading">
        <NavLink to={"/my-day"}>
          <FontAwesomeIcon className="icon icon-navigation" icon={faReply} />
        </NavLink>
        <h2 className="page-title">Update Task</h2>
        <span>&nbsp; </span>
      </div>
      <TaskForm
        buttonText="Update"
        navigation={`/my-task/${id}`}
        sendData={editTask}
        initialData={task}
        id={task.id}
      />
    </ModifyTaskStyled>
  );
};
