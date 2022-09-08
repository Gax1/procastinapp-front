import { render } from "@testing-library/react";
import { Wrapper } from "../../test-utils/Wrapper/Wrapper";
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
          <AuthLogin children={<Header />} />
        </Wrapper>
      );

      expect(mockedNavigate).toHaveBeenCalled();
    });
  });
});
