import styled from "styled-components";

export const HeaderStyled = styled.div`
  background-color: ${(props) => props.theme.colors.mainColor};
  font-size: ${(props) => props.theme.fontSizesMobile.medium};
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  .logout-icon {
    font-size: 1.8rem;
  }

  @media (min-width: 1000px) {
    font-size: ${(props) => props.theme.fontSizesDesktop.big};
    .logout-icon {
      font-size: 3rem;
    }
  }
`;
