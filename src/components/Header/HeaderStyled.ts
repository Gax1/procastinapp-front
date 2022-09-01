import styled from "styled-components";

export const HeaderStyled = styled.div`
  background-color: ${(props) => props.theme.colors.mainColor};
  .header-container {
    font-size: ${(props) => props.theme.fontSizesMobile.big};
    width: 100%;
    height: 20vh;
    text-align: center;
  }
  @media (min-width: 768px) {
    font-size: ${(props) => props.theme.fontSizesDesktop.big};
  }
`;
