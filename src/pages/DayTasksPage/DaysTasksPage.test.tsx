import { render, screen } from "@testing-library/react";
import { Wrapper } from "../../test-utils/Wrapper/Wrapper";
import { DayTasksPage } from "./DayTasksPage";

describe("Given a daysTasks component", () => {
  describe("When rendered", () => {
    test("Then it should show a ProcastinapP title", () => {
      render(
        <Wrapper>
          <DayTasksPage />
        </Wrapper>
      );

      const title = screen.getByRole("heading", { name: "ProcastinapP" });

      expect(title).toBeInTheDocument();
    });
    test("Then it should show another title with its text", () => {
      const titleText = "My Tasks";

      render(
        <Wrapper>
          <DayTasksPage />
        </Wrapper>
      );

      const title = screen.getByRole("heading", { name: titleText });

      expect(title).toBeInTheDocument();
    });
  });
});
