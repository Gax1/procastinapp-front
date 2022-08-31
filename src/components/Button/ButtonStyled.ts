import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: ${(props) => props.theme.colors.mainColor};
  width: 240px;
  height: 60px;
  border-radius: ${(props) => props.theme.borderRadius};
  font-size: ${(props) => props.theme.fontSizesMobile.mediumTitles};

  @media (min-width: 768px) {
    width: 360px;
    height: 60px;
  }
`;
