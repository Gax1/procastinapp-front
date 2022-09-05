import { render, screen, waitFor } from "@testing-library/react";
import { Wrapper } from "../../test-utils/Wrapper/Wrapper";
import { Modal } from "./Modal";
import userEvent from "@testing-library/user-event";

let mockUseSelector = {};
const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => mockUseSelector,
  useDispatch: () => mockDispatch,
}));

describe("Given a Modal component", () => {
  describe("When rendered and notification open property is true", () => {
    test("Then it should show a modal of success", () => {
      mockUseSelector = {
        displayText: "Succeded: user logged in",
        open: true,
      };
      const expectedModalText = "Succeded: user logged in";
      render(
        <Wrapper>
          <Modal />
        </Wrapper>
      );

      const modalMessage = screen.getByText(expectedModalText);

      expect(modalMessage).toBeInTheDocument();
    });
    test("Then it should show a modal of error", () => {
      mockUseSelector = {
        displayText: "Error in login",
        open: true,
      };
      const expectedModalText = "Error in login";
      render(
        <Wrapper>
          <Modal />
        </Wrapper>
      );

      const modalMessage = screen.getByText(expectedModalText);

      expect(modalMessage).toBeInTheDocument();
    });
  });
  describe("When the user clicks in the close icon", () => {
    test("Then it should show no modal", async () => {
      mockUseSelector = {
        displayText: "Error in login",
        open: true,
      };
      render(
        <Wrapper>
          <Modal />
        </Wrapper>
      );

      const icon = screen.getByTestId("close-icon");

      await userEvent.click(icon);

      await waitFor(() => expect(mockDispatch).toHaveBeenCalled());
    });
  });
});
