import styled from "styled-components";

export const HeaderStyled = styled.div`
  background-color: ${(props) => props.theme.colors.mainColor};
  font-size: ${(props) => props.theme.fontSizesMobile.big};
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;

  .logout-icon {
    font-size: 50px;
    position: absolute;
    right: 5%;
  }

  @media (min-width: 1000px) {
    font-size: ${(props) => props.theme.fontSizesDesktop.big};
  }
`;
