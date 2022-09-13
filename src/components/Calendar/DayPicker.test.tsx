import { render, screen, waitFor } from "@testing-library/react";
import { Wrapper } from "../../test-utils/Wrapper/Wrapper";
import DayPicker from "./DayPicker";
import userEvent from "@testing-library/user-event";
import React from "react";

describe("Given a DayPicker component", () => {
  describe("When rendered", () => {
    test("Then it should a month button and a day button", async () => {
      const monthDate = "September 2022";

      render(
        <Wrapper>
          <DayPicker />
        </Wrapper>
      );

      const monthButton = screen.getByText(monthDate);
      const dayButton = screen.getByRole("button", {
        name: "September 15, 2022",
      });

      expect(monthButton).toBeInTheDocument();
      expect(dayButton).toBeInTheDocument();
    });
  });

  test("Then it should change the state", async () => {
    render(
      <Wrapper>
        <DayPicker />
      </Wrapper>
    );

    const dayButton = screen.getByRole("button", {
      name: "September 15, 2022",
    });

    const onclick = jest.fn();
    dayButton.onclick = onclick;

    await userEvent.click(dayButton);
    await waitFor(() => {
      expect(onclick).toHaveBeenCalled();
    });
  });
});
