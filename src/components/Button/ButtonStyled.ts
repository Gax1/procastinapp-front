import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: ${(props) => props.theme.colors.mainColor};
  width: 240px;
  height: 60px;
  border-radius: ${(props) => props.theme.borderRadius};
  font-size: ${(props) => props.theme.fontSizesMobile.mediumTitles};
  cursor: pointer;
  border: none;
  font-family: inherit;

  @media (min-width: 1000px) {
    width: 360px;
    height: 60px;
  }
`;
