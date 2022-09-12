import {
  faCheck,
  faPencil,
  faRedo,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { Task } from "../../interfaces/interfaces";
import { useTasks } from "../../store/hooks/tasksHook";
import { RootState } from "../../store/store";
import { DetailsTaskStyled } from "./DetailsTaskStyled";

interface DetailsTaskProps {
  task: Task;
}

export const DetailsTask = ({ task }: DetailsTaskProps): JSX.Element => {
  const { deleteTask } = useTasks();
  const { user } = useSelector((state: RootState) => state);

  return (
    <DetailsTaskStyled>
      <h2 className="task-title">{task.title}</h2>
      <div className="task-details">
        <img
          src={task.backUpImg}
          alt={`${task.title}`}
          className="task-image"
        />
        <div className="task-information">
          <div className="task-description task-data">
            <span>Description:</span>
            <span>{task.description}</span>
          </div>
          <div className="task-importance task-data">
            <span>Importance:</span>
            <span>{task.importance}</span>
          </div>
          <div className="task-date task-data">
            <span>Task Date:</span>
            <span>{task.date}</span>
          </div>
        </div>
        <div className="task-icons">
          <FontAwesomeIcon
            icon={faCheck}
            onClick={() => deleteTask(task.id, user.id, true)}
            className="icon"
            data-testid="icon"
          />
          <FontAwesomeIcon icon={faRedo} className="icon" />
          <FontAwesomeIcon icon={faPencil} className="icon" />
          <FontAwesomeIcon
            icon={faTrashAlt}
            onClick={() => deleteTask(task.id, user.id, false)}
            className="icon"
            data-testid="icon"
          />
        </div>
      </div>
    </DetailsTaskStyled>
  );
};
