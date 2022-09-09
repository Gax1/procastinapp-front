import {
  faBackward,
  faCalendarAlt,
  faForward,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
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
            <span>&nbsp; </span>
            <h3 className="picked-date">{day}</h3>
            <FontAwesomeIcon icon={faCalendarAlt} className="calendar-icon" />
          </header>
          <div className="tasks-container">
            <h4 className="counted-tasks">Task of the day: {tasks.length}</h4>
            {tasks.length === 0 && (
              <span className="empty-tasks">There are no tasks for today </span>
            )}
            {tasks.length > 0 &&
              tasks.map((task) => <Task key={task.id} tasks={task} />)}
          </div>
          <footer className="icons-container">
            <FontAwesomeIcon icon={faBackward} />
            <FontAwesomeIcon icon={faPlusCircle} />
            <FontAwesomeIcon icon={faForward} />
          </footer>
        </section>
      </DayTasksPageStyled>
    </>
  );
};
