import { faReply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { DetailsTask } from "../../components/DetailsTask/DetailsTask";
import { Header } from "../../components/Header/Header";
import { uploadTaskActionCreator } from "../../store/features/detailsTaskSlice/detailsTaskSlice";
import { useAppDispatch } from "../../store/hooks/hooks";
import { useTasks } from "../../store/hooks/tasksHook";
import { RootState } from "../../store/store";
import { TaskDetailsPageStyled } from "./TaskDetailsPageStyled";

export const TaskDetailsPage = (): JSX.Element => {
  const {
    task,
    user: { token },
  } = useSelector((state: RootState) => state);
  const { id } = useParams();
  const { getTaskById } = useTasks();
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const { myTask } = await getTaskById(id as string, token);
      dispatch(uploadTaskActionCreator(myTask));
    })();
  }, [id, token, dispatch, getTaskById]);

  return (
    <>
      <Header />
      <TaskDetailsPageStyled>
        <div className="header-details">
          <NavLink to={"/my-day"}>
            <FontAwesomeIcon className="icon icon-navigation" icon={faReply} />
          </NavLink>
          <h2 className="page-title">My Task</h2>
          <span>&nbsp; </span>
        </div>
        <DetailsTask task={task} />
      </TaskDetailsPageStyled>
    </>
  );
};
