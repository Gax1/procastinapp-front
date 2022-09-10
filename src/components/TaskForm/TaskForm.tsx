import { Button } from "../Button/Button";
import { TaskFormStyled } from "./TaskFormStyled";

interface TaskFormProps {
  buttonText: string;
}

const TaskForm = ({ buttonText }: TaskFormProps): JSX.Element => {
  return (
    <TaskFormStyled>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        className="form-input task-input"
        id="title"
        placeholder="here goes the title..."
      />
      <label htmlFor="date">Pick a Date:</label>
      <input type="date" className="form-input task-input__date" id="date" />
      <label htmlFor="">Description:</label>
      <textarea
        className="form-input task-input__description"
        rows={10}
        cols={30}
        placeholder="Write here youre description..."
      ></textarea>
      <label htmlFor="importance">How importan is this task for you?</label>
      <select name="importance" id="importance">
        <option value="">Select importance</option>
        <option value="very">very</option>
        <option value="very">medium</option>
        <option value="very">small</option>
      </select>
      <label htmlFor="img">Select a file:</label>
      <input type="file" className="task-input__select-image" id="img" />
      <Button buttonText={buttonText} disabled />
    </TaskFormStyled>
  );
};

export default TaskForm;
