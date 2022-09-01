import styled from "styled-components";

export const RegisterPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  .page-title-container {
    display: flex;
    background-color: ${(props) => props.theme.colors.secondaryColor};
    justify-content: center;
    position: relative;
    font-size: ${(props) => props.theme.fontSizesMobile.mediumTitles};
    padding: 15px;
  }
  .icon {
    position: absolute;
    left: 25%;
    top: 25%;
    font-size: 40px;
  }
`;
