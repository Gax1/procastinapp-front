import { render, screen, waitFor } from "@testing-library/react";
import { TasksRepository } from "../../repositories/TasksRepository";
import { Wrapper } from "../../test-utils/Wrapper/Wrapper";
import { DetailsTask } from "./DetailsTask";
import userEvent from "@testing-library/user-event";

const task = {
  date: "09/05/2022",
  description: "test-description",
  id: "test-id",
  img: "test-img",
  backUpImg:
    "https://tvwhlidthburgnidbinv.supabase.co/storage/v1/object/public/final-project/1662725235780-pikapika.png",
  importance: "very",
  owner: "test-idOwner",
  title: "title-test",
};

jest.mock("../../repositories/TasksRepository");
TasksRepository as jest.Mock;

describe("Given a Details Task component", () => {
  describe("When rendered with a task", () => {
    test("Then it should show a title", () => {
      const titleText = "title-test";
      const dateText = "09/05/2022";
      const importanceText = "Importance:";

      render(
        <Wrapper>
          <DetailsTask task={task} />
        </Wrapper>
      );
      const title = screen.getByRole("heading", { name: titleText });
      const date = screen.getByText(dateText);
      const importance = screen.getByText(importanceText);

      expect(title).toBeInTheDocument();
      expect(date).toBeInTheDocument();
      expect(importance).toBeInTheDocument();
    });
    test("When click in the icon trash and check should call the delete function", async () => {
      const testId = "icon";
      const mockedDelete = jest.fn();
      TasksRepository.prototype.deleteTask = mockedDelete;
      render(
        <Wrapper>
          <DetailsTask task={task} />
        </Wrapper>
      );
      const icons = screen.getAllByTestId(testId);

      icons.forEach(async (icon) => await userEvent.click(icon));
      await waitFor(() => {
        expect(mockedDelete).toHaveBeenCalledTimes(2);
      });
    });
  });
});
