import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Wrapper } from "../../test-utils/Wrapper/Wrapper";
import DayPicker from "./DayPicker";

describe("Given a DayPicker component", () => {
  describe("When rendered", () => {
    test("Then it should show buttons", async () => {
      const monthDate = "September 2022";

      const { container } = render(
        <Wrapper>
          <DayPicker />
        </Wrapper>
      );

      const mockOnChange = jest.fn();

      container.onchange = mockOnChange;

      const monthButton = screen.getByText(monthDate);
      const buttonOne = screen.getByRole("button", {
        name: "September 15, 2022",
      });
      await fireEvent.change(buttonOne);

      expect(monthButton).toBeInTheDocument();
      expect(buttonOne).toBeInTheDocument();
      await waitFor(() => {
        expect(mockOnChange).toHaveBeenCalled();
      });
    });
  });
});
