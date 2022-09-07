import {
  faBackward,
  faCalendarAlt,
  faForward,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Header } from "../../components/Header/Header";
import { useAppSelector } from "../../store/hooks/hooks";
import { RootState } from "../../store/store";
import { DayTasksPageStyled } from "./DayTasksPageStyled";

export const DayTasksPage = (): JSX.Element => {
  const { days, tasks } = useAppSelector((state: RootState) => state);

  return (
    <>
      <DayTasksPageStyled>
        <Header />
        <h2 className="title-page">My Tasks</h2>
        <section className="tasks-days">
          <header className="title-taks">
            <span>&nbsp; </span>
            <h3 className="picked-date">{days}</h3>
            <FontAwesomeIcon icon={faCalendarAlt} className="calendar-icon" />
          </header>
          <div className="tasks-container">
            <h4 className="counted-tasks">Task of the day: {tasks.length}</h4>
            <span className="empty-tasks">There are no tasks for today </span>
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
