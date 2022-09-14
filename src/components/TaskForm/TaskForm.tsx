import React, { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InitialForm } from "../../interfaces/interfaces";
import { useAppSelector } from "../../store/hooks/hooks";
import { RootState } from "../../store/store";
import { dateFormater } from "../../utils/dateFormater";
import { Button } from "../Button/Button";
import { TaskFormStyled } from "./TaskFormStyled";

interface TaskFormProps {
  buttonText: string;
  navigation: string;
  sendData: (id: string, token: string, formData: FormData) => Promise<void>;
  initialData: InitialForm;
  id: string;
}

const TaskForm = ({
  buttonText,
  navigation,
  sendData,
  initialData,
  id,
}: TaskFormProps): JSX.Element => {
  const { token } = useAppSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  const formData = new FormData();

  const [newTask, setNewTask] = useState(initialData);

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

    if (typeof newTask.img === "string") {
      newTask.img = new File([""], "invalid-img");
    }

    formData.append("title", newTask.title);
    formData.append("description", newTask.description);
    formData.append("date", date);
    formData.append("importance", newTask.importance);
    formData.append("img", newTask.img);
    if (newTask.owner) {
      formData.append("owner", newTask.owner);
      formData.append("backUpImg", newTask.backUpImg!);
      formData.append("id", newTask.id!);
    }

    await sendData(id, token, formData);
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
