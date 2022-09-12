import {
  faCheck,
  faExpandArrowsAlt,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { Task as Itask } from "../../interfaces/interfaces";
import { useTasks } from "../../store/hooks/tasksHook";
import TaskStyled from "./TaskStyled";

interface TaskProps {
  tasks: Itask;
  token: string;
}

const Task = ({ tasks, token }: TaskProps): JSX.Element => {
  const { deleteTask } = useTasks();
  const navigate = useNavigate();
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
          data-testid="icon"
        />
        <FontAwesomeIcon
          icon={faTrashAlt}
          onClick={() => deleteTask(tasks.id, token, false)}
          className="icon"
          data-testid="icon"
        />
        <FontAwesomeIcon
          icon={faExpandArrowsAlt}
          className="icon"
          onClick={() => navigate(`/my-task/${tasks.id}`)}
        />
      </footer>
    </TaskStyled>
  );
};

export default Task;
