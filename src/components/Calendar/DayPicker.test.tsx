import { render, screen } from "@testing-library/react";
import { Wrapper } from "../../test-utils/Wrapper/Wrapper";
import DayPicker from "./DayPicker";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useAppDispatch: () => mockDispatch,
}));

describe("Given a DayPicker component", () => {
  describe("When rendered", () => {
    test("Then it should show buttons", async () => {
      const monthDate = "September 2022";

      render(
        <Wrapper>
          <DayPicker />
        </Wrapper>
      );
      const monthButton = screen.getByText(monthDate);
      const buttons = screen.getAllByRole("button");

      expect(monthButton).toBeInTheDocument();
      expect(buttons[10]).toBeInTheDocument();
    });
  });
});
