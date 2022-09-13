import styled from "styled-components";

export const ModifyTaskStyled = styled.div`
  .page-heading {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-size: ${(props) => props.theme.fontSizesMobile.mediumTitles};
    margin-top: 20px;
    margin-bottom: 40px;
  }
  .icon-navigation {
    font-size: 1.8rem;
  }
`;
