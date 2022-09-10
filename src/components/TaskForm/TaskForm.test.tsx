import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Wrapper } from "../../test-utils/Wrapper/Wrapper";
import TaskForm from "./TaskForm";
import userEvent from "@testing-library/user-event";

describe("Given a taskForm component", () => {
  const titlePlaceHolder = "here goes the title...";
  const dateText = "Pick a Date:";
  const describePlaceHolder = "Write here youre description...";
  const buttonText = "Create Task";
  const importanceText = "How importan is this task for you?";
  describe("When rendered", () => {
    test("Then it should show a button and inputs", () => {
      render(
        <Wrapper>
          <TaskForm buttonText="Create Task" />
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
    const newTask = {
      title: "test-title",
      description: "test-description",
      date: "date-test",
      importance: "very",
      img: imgMock,
    };

    test("Then it should call the onSubmit function", async () => {
      render(
        <Wrapper>
          <TaskForm buttonText="Create Task" />
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
});
