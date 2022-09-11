import { render, screen } from "@testing-library/react";
import { Task as Itask } from "../../interfaces/interfaces";
import { Wrapper } from "../../test-utils/Wrapper/Wrapper";
import Task from "./Task";

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
  });
});
