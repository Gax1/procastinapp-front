import {
  faCheck,
  faExpandArrowsAlt,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Task as Itask } from "../../interfaces/interfaces";
import { useTasks } from "../../store/hooks/tasksHook";
import TaskStyled from "./TaskStyled";

interface TaskProps {
  tasks: Itask;
  token: string;
}

const Task = ({ tasks, token }: TaskProps): JSX.Element => {
  const { deleteTask } = useTasks();
  return (
    <TaskStyled>
      <header className="task-card-header">
        <h2 className="title-task">{tasks.title}</h2>
        <div className={`circle circle__${tasks.importance}`}></div>
      </header>
      <p className="task-description">{tasks.description}</p>
      <footer className="icons-footer">
        <FontAwesomeIcon
          icon={faCheck}
          onClick={() => deleteTask(tasks.id, token, true)}
          className="icon"
        />
        <FontAwesomeIcon
          icon={faTrashAlt}
          onClick={() => deleteTask(tasks.id, token, false)}
          className="icon"
        />
        <FontAwesomeIcon icon={faExpandArrowsAlt} className="icon" />
      </footer>
    </TaskStyled>
  );
};

export default Task;
