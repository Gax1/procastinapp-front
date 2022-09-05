import { render, screen } from "@testing-library/react";
import { Wrapper } from "../../test-utils/Wrapper/Wrapper";
import { NotFoundPage } from "./NotFoundPage";

describe("Given a not found page component", () => {
  describe("When rendered", () => {
    test("Then it should show a heading", () => {
      const titleText = "ProcastinapP";

      render(
        <Wrapper>
          <NotFoundPage />
        </Wrapper>
      );

      const title = screen.getByRole("heading", { name: titleText });

      expect(title).toBeInTheDocument();
    });
    test("Then it should a heading with 404", () => {
      const titleText = "404 PAGE NOT FOUND";

      render(
        <Wrapper>
          <NotFoundPage />
        </Wrapper>
      );

      const title = screen.getByRole("heading", { name: titleText });

      expect(title).toBeInTheDocument();
    });
  });
});
