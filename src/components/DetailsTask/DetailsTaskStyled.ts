import styled from "styled-components";

export const DetailsTaskStyled = styled.div`
  background-color: ${(props) => props.theme.colors.mainColor};
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  .task-title {
    margin: 40px;
    font-size: ${(props) => props.theme.fontSizesMobile.big};
  }
  .task-details {
    background-color: ${(props) => props.theme.colors.secondaryColor};
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
    font-size: ${(props) => props.theme.fontSizesMobile.medium};
    width: 90%;
  }
  .task-image {
    margin: 40px;
    border-radius: 50%;
    height: 250px;
    width: 250px;
    object-fit: cover;
  }
  .task-information {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 20px;
    margin-bottom: 20px;
  }
  .task-data {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .task-icons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70%;
    margin-bottom: 40px;
    font-size: 30px;
  }
`;
