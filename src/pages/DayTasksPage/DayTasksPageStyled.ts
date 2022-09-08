import styled from "styled-components";

export const DayTasksPageStyled = styled.div`
  background-color: ${(props) => props.theme.colors.secondaryColor};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .title-page {
    font-size: ${(props) => props.theme.fontSizesMobile.big};
    margin: 40px;
  }
  .tasks-days {
    background-color: ${(props) => props.theme.colors.mainColor};
    width: 90%;
    border-radius: 40px;
  }
  .title-taks {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin: 20px;
    font-size: ${(props) => props.theme.fontSizesMobile.generalUse};
  }
  .calendar-icon {
    font-size: 2rem;
  }
  .tasks-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  .icons-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-size: 2rem;
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;
