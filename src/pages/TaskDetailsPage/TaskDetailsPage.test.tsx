import { render, screen } from "@testing-library/react";
import React from "react";
import { MockedWrapper } from "../../test-utils/Wrapper/Wrapper";
import { TaskDetailsPage } from "./TaskDetailsPage";

const id = { id: "test-id" };

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => id,
}));

describe("Given a TaskDetailsPage component", () => {
  describe("When rendered with a task", () => {
    test("Then it should show two titles and a description", () => {
      const desciptionText = "Description:";
      const mainTitleText = "ProcastinapP";
      const titleText = "My Task";

      render(
        <MockedWrapper>
          <TaskDetailsPage />
        </MockedWrapper>
      );

      const mainTitle = screen.getByRole("heading", { name: mainTitleText });
      const title = screen.getByRole("heading", { name: titleText });
      const desciption = screen.getByText(desciptionText);

      expect(mainTitle).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(desciption).toBeInTheDocument();
    });
  });
});
