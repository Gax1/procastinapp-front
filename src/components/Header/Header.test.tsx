import { render, screen } from "@testing-library/react";
import { Wrapper } from "../../test-utils/Wrapper/Wrapper";
import { Header } from "./Header";

const mockUseSelector = jest.fn().mockReturnValue({ isUserLoggedIn: true });
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => mockUseSelector,
}));

describe("Given a header component", () => {
  describe("When rendered", () => {
    test("Then it should show a title", () => {
      render(
        <Wrapper>
          <Header />
        </Wrapper>
      );

      const title = screen.getByRole("heading", { name: "ProcastinapP" });

      expect(title).toBeInTheDocument();
    });
  });
});
