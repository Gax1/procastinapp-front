import styled from "styled-components";

export const LoginPageStyled = styled.div`
  background-color: ${(props) => props.theme.colors.secondaryColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  .login-text-container {
    width: 70%;
    margin: 40px;
    padding: 20px;
    background-color: ${(props) => props.theme.colors.mainColor};
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 20px;
    border-radius: 40px;
  }
  .login-footer {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    .register-text {
      text-decoration: underline;
      font-size: ${(props) => props.theme.fontSizesMobile.mediumTitles};
    }
  }
`;
