import { render, screen } from "@testing-library/react";
import { Task as Itask } from "../../interfaces/interfaces";
import { TasksRepository } from "../../repositories/TasksRepository";
import { Wrapper } from "../../test-utils/Wrapper/Wrapper";
import Task from "./Task";
import userEvent from "@testing-library/user-event";

jest.mock("../../repositories/TasksRepository");
TasksRepository as jest.Mock;

const tasks: Itask = {
  date: "22/07/2022",
  description:
    "Description of the task extended for propose of seing a long description",
  id: "id12345",
  img: "img",
  importance: "very",
  owner: "test-id",
  title: "Title of the task",
};

describe("Given a Task component", () => {
  describe("When its rendered with a task", () => {
    test("Then it should show a heading and paragraph", () => {
      render(
        <Wrapper>
          <Task tasks={tasks} token={"toke-test"} />
        </Wrapper>
      );

      const title = screen.getByRole("heading", { name: "Title of the task" });
      const paragraph = screen.getByText(
        "Description of the task extended for propose of seing a long description"
      );

      expect(title).toBeInTheDocument();
      expect(paragraph).toBeInTheDocument();
    });
    test("Then if the user clicks in the trash and check icon it should call the delete method", async () => {
      const mockedDelete = jest.fn();

      TasksRepository.prototype.deleteTask = mockedDelete;
      render(
        <Wrapper>
          <Task tasks={tasks} token={"toke-test"} />
        </Wrapper>
      );

      const iconsDelete = screen.getAllByTestId("icon");

      await userEvent.click(iconsDelete[0]);
      await userEvent.click(iconsDelete[1]);

      expect(mockedDelete).toHaveBeenCalledTimes(2);
    });
  });
});
