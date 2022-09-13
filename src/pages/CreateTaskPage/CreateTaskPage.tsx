import { faReply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import TaskForm from "../../components/TaskForm/TaskForm";
import { InitialForm } from "../../interfaces/interfaces";
import { useTasks } from "../../store/hooks/tasksHook";
import CreateTaskPageStyled from "./CreateTaskPageStyled";

const CreateTaskPage = (): JSX.Element => {
  const { createTask } = useTasks();
  const initalFormState: InitialForm = {
    title: "",
    description: "",
    date: "",
    importance: "",
    img: "",
  };
  return (
    <>
      <CreateTaskPageStyled>
        <Header />
        <div className="page-title-container">
          <span className="page-title navigation-arrow">
            <NavLink to={"/my-day"}>
              <FontAwesomeIcon className="icon" icon={faReply} />
            </NavLink>
          </span>
          <h2 className="page-title">Add Task</h2>
          <span>&nbsp; </span>
        </div>
        <TaskForm
          buttonText="Create Task"
          navigation="/my-day"
          sendData={createTask}
          initialData={initalFormState}
        />
      </CreateTaskPageStyled>
    </>
  );
};

export default CreateTaskPage;
