import TestRenderer from "react-test-renderer";
import App from "./App";
import { MockedWrapper, Wrapper } from "./test-utils/Wrapper/Wrapper";

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
  describe("When rendered with loadding true", () => {
    test("Then it should always match this snapshot", () => {
      jest.spyOn(Object.getPrototypeOf(window.localStorage), "getItem");
      Object.setPrototypeOf(window.localStorage.getItem, {
        user: { id: "test-id" },
      });
      const expectedApp = TestRenderer.create(
        <MockedWrapper>
          <App />
        </MockedWrapper>
      );

      expect(expectedApp).toMatchSnapshot();
    });
  });
});
