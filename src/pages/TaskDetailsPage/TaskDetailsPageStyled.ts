import styled from "styled-components";

export const TaskDetailsPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .header-details {
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    font-size: ${(props) => props.theme.fontSizesMobile.big};
    justify-content: space-around;
    width: 80%;
  }
  .icon-navigation {
    font-size: 1.8rem;
  }
`;
