import { render, screen } from "@testing-library/react";
import { useAppSelector } from "../../store/hooks/hooks";
import { Wrapper } from "../../test-utils/Wrapper/Wrapper";
import { Header } from "./Header";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useAppSelector: jest.fn().mockReturnValue({
    isUserLoggedIn: true,
  }),
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
