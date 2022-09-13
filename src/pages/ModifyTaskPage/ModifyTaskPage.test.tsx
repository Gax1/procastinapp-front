import { render, screen } from "@testing-library/react";
import { Wrapper } from "../../test-utils/Wrapper/Wrapper";
import { ModifyTask } from "./ModifyTaskPage";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: "test-id" }),
}));

describe("Given a Modify Task page", () => {
  describe("When rendered", () => {
    test("Then it should show a main title and a secondary title", () => {
      const secondaryTitle = "Update Task";
      const mainTitle = "ProcastinapP";
      const inputTitle = "here goes the title...";
      const buttonText = "Update";

      render(
        <Wrapper>
          <ModifyTask />
        </Wrapper>
      );

      const title = screen.getByRole("heading", { name: mainTitle });
      const pageTitle = screen.getByRole("heading", { name: secondaryTitle });
      const input = screen.getByPlaceholderText(inputTitle);
      const button = screen.getByRole("button", { name: buttonText });

      expect(pageTitle).toBeInTheDocument();
      expect(input).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
});
