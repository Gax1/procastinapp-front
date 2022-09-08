import { render, screen } from "@testing-library/react";
import { MockedWrapper, Wrapper } from "../../test-utils/Wrapper/Wrapper";
import { DayTasksPage } from "./DayTasksPage";

describe("Given a daysTasks component", () => {
  describe("When rendered", () => {
    test("Then it should show a ProcastinapP title", async () => {
      render(
        <MockedWrapper>
          <DayTasksPage />
        </MockedWrapper>
      );

      const title = screen.getByRole("heading", { name: "ProcastinapP" });

      expect(title).toBeInTheDocument();
    });
    test("Then it should show another title with its text", async () => {
      const titleText = "My Tasks";

      render(
        <Wrapper>
          <DayTasksPage />
        </Wrapper>
      );

      const title = await screen.findByText(titleText);

      expect(title).toBeInTheDocument();
    });
  });
});
