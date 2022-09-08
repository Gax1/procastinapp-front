import styled from "styled-components";

export const RegisterPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  .page-title-container {
    display: flex;
    background-color: ${(props) => props.theme.colors.secondaryColor};
    justify-content: space-around;
    align-items: center;
    position: relative;
    font-size: ${(props) => props.theme.fontSizesMobile.mediumTitles};
    padding: 15px;
  }
  .icon {
    font-size: 1.8rem;
  }
  @media (min-width: 1000px) {
    .page-title-container {
      font-size: ${(props) => props.theme.fontSizesDesktop.medium};
    }
    .icon {
      font-size: 2.5rem;
    }
  }
`;
