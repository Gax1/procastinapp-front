import TestRenderer from "react-test-renderer";
import App from "./App";
import { Wrapper } from "./test-utils/Wrapper/Wrapper";

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
});
