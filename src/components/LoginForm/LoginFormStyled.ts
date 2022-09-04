import styled from "styled-components";

export const LoginFormStyled = styled.form`
  background-color: ${(props) => props.theme.colors.secondaryColor};
  color: ${(props) => props.theme.colors.mainColor};
  font-family: ${(props) => props.theme.colors.fontFamily};
  display: flex;
  justify-content: center;
  .register-container {
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: center;
  }
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  .login-input {
    font-family: inherit;
    background-color: ${(props) => props.theme.colors.mainColor};
    border-radius: ${(props) => props.theme.borderRadius};
    width: ${(props) => props.theme.inputsSizesMobile.mobileWidth};
    height: ${(props) => props.theme.inputsSizesMobile.mobileHeigth};
    border: none;
    @media (min-width: 768px) {
      width: ${(props) => props.theme.inputsSizesDesktop.desktopWith};
      height: ${(props) => props.theme.inputsSizesDesktop.desktopHeigh};
    }
    text-align: center;
    ::placeholder {
      color: ${(props) => props.theme.colors.inputTextColor};
    }
  }
  label {
    color: ${(props) => props.theme.colors.fontColor};
  }
`;
