import { render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import App from "./App";
import { MockedWrapper, Wrapper } from "./test-utils/Wrapper/Wrapper";

const user = {
  id: "test-id",
  token: "test-token",
  username: "test-username",
};

localStorage.setItem("user", JSON.stringify(user));

describe("Given the app component", () => {
  describe("When rendered", () => {
    test("Then it should always match this snapshot", () => {
      const expectedApp = TestRenderer.create(
        <Wrapper>
          <App />
        </Wrapper>
      );

      expect(expectedApp).toMatchSnapshot();
    });
  });
  describe("When rendered with loading true", () => {
    test("Then it should show a modal", () => {
      render(
        <MockedWrapper>
          <App />
        </MockedWrapper>
      );

      const login = screen.getByTestId("loader-container");

      expect(login).toBeInTheDocument();
    });
  });
});
