import { render, screen } from "@testing-library/react";
import { Wrapper } from "../../test-utils/Wrapper/Wrapper";
import { Modal } from "./Modal";

let mockUseSelector = {};

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => mockUseSelector,
}));

describe("Given a Modal component", () => {
  describe("When rendered and notification open property is true", () => {
    test("Then it should show a modal", () => {
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
  });
});
