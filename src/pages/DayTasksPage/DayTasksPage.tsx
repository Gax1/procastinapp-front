import {
  faBackward,
  faForward,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import DayPicker from "../../components/Calendar/DayPicker";
import { Header } from "../../components/Header/Header";
import Task from "../../components/Task/Task";
import { useAppSelector } from "../../store/hooks/hooks";
import { useTasks } from "../../store/hooks/tasksHook";
import { RootState } from "../../store/store";
import { DayTasksPageStyled } from "./DayTasksPageStyled";

export const DayTasksPage = (): JSX.Element => {
  const { day, tasks, user } = useAppSelector((state: RootState) => state);
  const { getDay } = useTasks();

  useEffect(() => {
    (async () => {
      await getDay(user.id, day, user.token);
    })();
  }, [user.id, day, user.token, getDay]);

  return (
    <>
      <DayTasksPageStyled>
        <Header />
        <h2 className="title-page">My Tasks</h2>
        <section className="tasks-days">
          <header className="title-taks">
            <h3 className="picked-date">{day}</h3>
            <DayPicker />
          </header>
          <div className="tasks-container">
            <h4 className="counted-tasks">Task of the day: {tasks.length}</h4>
            {tasks.length === 0 && (
              <span className="empty-tasks">There are no tasks for today </span>
            )}
            {tasks.length > 0 &&
              tasks.map((task) => (
                <Task key={task.id} tasks={task} token={user.token} />
              ))}
          </div>
          <footer className="icons-container">
            <FontAwesomeIcon icon={faBackward} className="icon" />
            <NavLink to={"/my-day/create-task"}>
              <FontAwesomeIcon icon={faPlusCircle} className="icon" />
            </NavLink>
            <FontAwesomeIcon icon={faForward} className="icon" />
          </footer>
        </section>
      </DayTasksPageStyled>
    </>
  );
};
