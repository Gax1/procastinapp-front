import { render, screen } from "@testing-library/react";
import { Wrapper } from "../../test-utils/Wrapper/Wrapper";
import { Loading } from "./Loading";

describe("Given a loader component", () => {
  describe("When rendered", () => {
    test("Then it should show a loader", () => {
      const testId = "loader-container";

      render(
        <Wrapper>
          <Loading />
        </Wrapper>
      );

      const loader = screen.getByTestId(testId);

      expect(loader).toBeInTheDocument();
    });
  });
});
