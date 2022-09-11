import React, { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks/hooks";
import { useTasks } from "../../store/hooks/tasksHook";
import { RootState } from "../../store/store";
import { dateFormater } from "../../utils/dateFormater";
import { Button } from "../Button/Button";
import { TaskFormStyled } from "./TaskFormStyled";

interface TaskFormProps {
  buttonText: string;
  navigation: string;
}

interface InitialForm {
  title: string;
  description: string;
  date: string;
  importance: string;
  img: string | File;
}

const TaskForm = ({ buttonText, navigation }: TaskFormProps): JSX.Element => {
  const initalFormState: InitialForm = {
    title: "",
    description: "",
    date: "",
    importance: "",
    img: "",
  };

  const { createTask } = useTasks();
  const { id, token } = useAppSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  const formData = new FormData();

  const [newTask, setNewTask] = useState(initalFormState);

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask({ ...newTask, [event.target.id]: event.target.value });
  };

  const handleChangeTextArea = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNewTask({ ...newTask, [event.target.id]: event.target.value });
  };
  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setNewTask({ ...newTask, [event.target.id]: event.target.value });
  };
  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask({ ...newTask, img: event.target.files![0] });
  };

  const onSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    const date = dateFormater(new Date(newTask.date));

    formData.append("title", newTask.title);
    formData.append("description", newTask.description);
    formData.append("date", date);
    formData.append("importance", newTask.importance);
    formData.append("img", newTask.img);

    await createTask(formData, token, id);
    navigate(navigation);
  };

  const isDisabled =
    newTask.title === "" ||
    newTask.description === "" ||
    newTask.img === "" ||
    newTask.importance === "";

  return (
    <TaskFormStyled onSubmit={onSubmit} data-testid="taskForm">
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        className="form-input task-input"
        id="title"
        placeholder="here goes the title..."
        value={newTask.title}
        onChange={handleChangeText}
      />
      <label htmlFor="date">Pick a Date:</label>
      <input
        type="date"
        className="form-input task-input__date"
        id="date"
        value={newTask.date}
        onChange={handleChangeText}
      />
      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        onChange={handleChangeTextArea}
        className="form-input task-input__description"
        rows={10}
        cols={30}
        placeholder="Write here youre description..."
        value={newTask.description}
      ></textarea>
      <label htmlFor="importance">How importan is this task for you?</label>
      <select name="importance" id="importance" onChange={handleChangeSelect}>
        <option value="">Select importance</option>
        <option value="very">very</option>
        <option value="medium">medium</option>
        <option value="small">small</option>
      </select>
      <label htmlFor="img">Select a file:</label>
      <input
        type="file"
        className="task-input__select-image"
        id="img"
        onChange={handleChangeFile}
        data-testid="img"
      />
      <Button buttonText={buttonText} disabled={isDisabled} />
    </TaskFormStyled>
  );
};

export default TaskForm;
