import { render, screen } from "@testing-library/react";
import { Wrapper } from "../../test-utils/Wrapper/Wrapper";
import { LoginPage } from "./LoginPage";

describe("Given a LoginPage component", () => {
  describe("When rendered", () => {
    test("Then it should show a header with a title", () => {
      const mainTitleText = "ProcastinapP";

      render(
        <Wrapper>
          <LoginPage />
        </Wrapper>
      );
      const mainTitle = screen.getByRole("heading", { name: mainTitleText });

      expect(mainTitle).toBeInTheDocument();
    });
    test("Then it should two inputs", () => {
      const inputUsernamePlaceHolder = "here goes youre username...";
      const placeHolderPassword = "here goes youre password...";
      render(
        <Wrapper>
          <LoginPage />
        </Wrapper>
      );
      const inputUsername = screen.getByPlaceholderText(
        inputUsernamePlaceHolder
      );
      const inputPassword = screen.getByPlaceholderText(placeHolderPassword);

      expect(inputUsername).toBeInTheDocument();
      expect(inputPassword).toBeInTheDocument();
    });
  });
});
