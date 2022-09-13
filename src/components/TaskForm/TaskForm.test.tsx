import {
  fireEvent,
  render,
  renderHook,
  screen,
  waitFor,
} from "@testing-library/react";
import { Wrapper } from "../../test-utils/Wrapper/Wrapper";
import TaskForm from "./TaskForm";
import userEvent from "@testing-library/user-event";
import { useTasks } from "../../store/hooks/tasksHook";
import { InitialForm, Task } from "../../interfaces/interfaces";

describe("Given a taskForm component", () => {
  const titlePlaceHolder = "here goes the title...";
  const dateText = "Pick a Date:";
  const describePlaceHolder = "Write here youre description...";
  const importanceText = "How importan is this task for you?";
  const initalFormState: InitialForm = {
    title: "",
    description: "",
    date: "",
    importance: "",
    img: "",
  };
  const id = "test-id";

  describe("When rendered", () => {
    const buttonText = "Create Task";
    test("Then it should show a button and inputs", () => {
      const {
        result: {
          current: { createTask },
        },
      } = renderHook(() => useTasks(), { wrapper: Wrapper });

      render(
        <Wrapper>
          <TaskForm
            buttonText="Create Task"
            navigation="/my-day"
            sendData={createTask}
            initialData={initalFormState}
            id={id}
          />
        </Wrapper>
      );

      const titleInput = screen.getByPlaceholderText(titlePlaceHolder);
      const textAreaDescription =
        screen.getByPlaceholderText(describePlaceHolder);
      const date = screen.getByLabelText(dateText);
      const importance = screen.getByLabelText(importanceText);
      const selectFile = screen.getByTestId("img");
      const button = screen.getByRole("button", { name: buttonText });

      expect(titleInput).toBeInTheDocument();
      expect(textAreaDescription).toBeInTheDocument();
      expect(date).toBeInTheDocument();
      expect(importance).toBeInTheDocument();
      expect(selectFile).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
  describe("When the user fill the fields and click in the button", () => {
    const testIdForm = "taskForm";
    const onSubmitMock = jest.fn();
    const imgMock = new File([""], "");
    const buttonText = "Create Task";

    test("Then it should call the onSubmit function", async () => {
      const initalTask = {
        title: "",
        description: "",
        date: "",
        importance: "",
        img: "test-img",
      };

      const {
        result: {
          current: { createTask },
        },
      } = renderHook(() => useTasks(), { wrapper: Wrapper });
      render(
        <Wrapper>
          <TaskForm
            buttonText="Create Task"
            navigation="/my-day"
            sendData={createTask}
            initialData={initalTask}
            id={id}
          />
        </Wrapper>
      );

      const formTask = screen.getByTestId(testIdForm);
      formTask.onsubmit = onSubmitMock;

      const titleInput = screen.getByPlaceholderText(titlePlaceHolder);
      const textAreaDescription =
        screen.getByPlaceholderText(describePlaceHolder);

      const importance = screen.getByLabelText(importanceText);
      const selectFile = screen.getByTestId("img");
      const button = screen.getByRole("button", {
        name: buttonText,
      });

      await fireEvent.change(titleInput, { target: { value: "test-title" } });
      await fireEvent.change(textAreaDescription, {
        target: { value: "test-decription" },
      });
      await fireEvent.change(importance, { target: { value: "very" } });
      await userEvent.upload(selectFile, imgMock);
      await userEvent.click(button);

      await waitFor(() => {
        expect(onSubmitMock).toHaveBeenCalled();
      });
    });
  });
  describe("When it receives an edit function", () => {
    jest.clearAllMocks();
    const titlePlaceHolder = "here goes the title...";
    const testIdForm = "taskForm";
    const onSubmitMock = jest.fn();
    const buttonText = "Update";
    test("Then it should call the submit function", async () => {
      const initalTask: Task = {
        title: "",
        description: "",
        date: "",
        importance: "",
        img: "test-img",
        id: "",
        owner: "test-owner",
        backUpImg: "",
      };

      const {
        result: {
          current: { editTask },
        },
      } = renderHook(() => useTasks(), { wrapper: Wrapper });
      render(
        <Wrapper>
          <TaskForm
            buttonText="Update"
            navigation="/my-day"
            sendData={editTask}
            initialData={initalTask}
            id={id}
          />
        </Wrapper>
      );

      const formTask = screen.getByTestId(testIdForm);
      formTask.onsubmit = onSubmitMock;

      const titleInput = screen.getByPlaceholderText(titlePlaceHolder);
      const textAreaDescription =
        screen.getByPlaceholderText(describePlaceHolder);

      const importance = screen.getByLabelText(importanceText);
      // const selectFile = screen.getByTestId("img");
      const button = screen.getByRole("button", {
        name: buttonText,
      });

      await fireEvent.change(titleInput, { target: { value: "test-title" } });
      await fireEvent.change(textAreaDescription, {
        target: { value: "test-decription" },
      });
      await fireEvent.change(importance, { target: { value: "very" } });
      await userEvent.click(button);

      await waitFor(() => {
        expect(onSubmitMock).toHaveBeenCalled();
      });
    });
  });
});
