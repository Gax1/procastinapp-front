import { render, screen } from "@testing-library/react";
import { Wrapper } from "../../test-utils/Wrapper/Wrapper";
import CreateTaskPage from "./CreateTaskPage";

describe("Given a create task page component", () => {
  describe("When its rendered", () => {
    test("Then it should show a two titles", () => {
      const mainTitleText = "ProcastinapP";
      const secondaryTitleText = "Add Task";
      const buttonText = "Create Task";

      render(
        <Wrapper>
          <CreateTaskPage />
        </Wrapper>
      );

      const mainTitle = screen.getByRole("heading", { name: mainTitleText });
      const secondaryTitle = screen.getByRole("heading", {
        name: secondaryTitleText,
      });
      const button = screen.getByRole("button", { name: buttonText });

      expect(mainTitle).toBeInTheDocument();
      expect(secondaryTitle).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
});
