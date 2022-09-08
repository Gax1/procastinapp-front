import {
  faCheck,
  faExpandArrowsAlt,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Task as Itask } from "../../interfaces/interfaces";
import TaskStyled from "./TaskStyled";

interface TaskProps {
  tasks: Itask;
}

const Task = ({ tasks }: TaskProps): JSX.Element => {
  return (
    <TaskStyled>
      <header className="task-card-header">
        <h2 className="title-task">{tasks.title}</h2>
        <div className={`circle circle__${tasks.importance}`}></div>
      </header>
      <p className="task-description">{tasks.description}</p>
      <footer className="icons-footer">
        <FontAwesomeIcon icon={faCheck} />
        <FontAwesomeIcon icon={faTrashAlt} />
        <FontAwesomeIcon icon={faExpandArrowsAlt} />
      </footer>
    </TaskStyled>
  );
};

export default Task;
