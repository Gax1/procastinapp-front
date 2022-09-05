import { render, screen } from "@testing-library/react";
import { Wrapper } from "../../test-utils/Wrapper/Wrapper";
import { RegisterPage } from "./RegisterPage";

describe("Given a registerPage component", () => {
  describe("When rendered", () => {
    test("Then it should show a title", () => {
      const pageTitle = "Register";

      render(
        <Wrapper>
          <RegisterPage />
        </Wrapper>
      );

      const title = screen.getByRole("heading", { name: pageTitle });

      expect(title).toBeInTheDocument();
    });
    test("Then it should show a header with a title", () => {
      const mainHeaderTitle = "ProcastinapP";
      render(
        <Wrapper>
          <RegisterPage />
        </Wrapper>
      );

      const mainTitle = screen.getByRole("heading", { name: mainHeaderTitle });

      expect(mainTitle).toBeInTheDocument();
    });
    test("Then it should show a form", () => {
      const formTextId = "formRegister";

      render(
        <Wrapper>
          <RegisterPage />
        </Wrapper>
      );

      const form = screen.getByTestId(formTextId);

      expect(form).toBeInTheDocument();
    });
  });
});
