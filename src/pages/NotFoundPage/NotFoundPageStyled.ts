import styled from "styled-components";

export const NotFoundPageStyled = styled.div`
  background-color: ${(props) => props.theme.colors.secondaryColor};
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  .main-title-notFoundPage {
    font-size: ${(props) => props.theme.fontSizesMobile.mediumTitles};
  }
  .text-notFound-page {
    font-size: ${(props) => props.theme.fontSizesMobile.medium};
  }
  .text-container {
    display: flex;
    flex-direction: column;
    gap: 100px;
  }
  @media (min-width: 1000px) {
    .main-title-notFoundPage {
      font-size: ${(props) => props.theme.fontSizesDesktop.big};
    }
    .text-notFound-page {
      font-size: ${(props) => props.theme.fontSizesDesktop.medium};
    }
  }
`;
