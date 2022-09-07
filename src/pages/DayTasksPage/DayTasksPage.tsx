import { Header } from "../../components/Header/Header";
import { DayTasksPageStyled } from "./DayTasksPageStyled";

export const DayTasksPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <DayTasksPageStyled>
        <h2 className="title-page">My Tasks</h2>
      </DayTasksPageStyled>
    </>
  );
};
