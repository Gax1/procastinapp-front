import { render, screen } from "@testing-library/react";
import { MockedWrapper, Wrapper } from "../../test-utils/Wrapper/Wrapper";
import { Header } from "../Header/Header";
import AuthLogin from "./AuthLoginComponent";

const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

describe("Given an AuthComponent", () => {
  describe("When rendered with a isLoggedIn false", () => {
    test("Then should call the navigation component", () => {
      render(
        <Wrapper>
          <AuthLogin>
            <Header />
          </AuthLogin>
        </Wrapper>
      );

      expect(mockedNavigate).toHaveBeenCalled();
    });
    test("Then is the isLoggedIn is true", () => {
      render(
        <MockedWrapper>
          <h1>Test title</h1>
        </MockedWrapper>
      );

      const title = screen.getByRole("heading", { name: "Test title" });

      expect(title).toBeInTheDocument();
    });
  });
});
