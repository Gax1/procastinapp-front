import styled from "styled-components";

export const RegisterFormStyled = styled.div`
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
  .form-register {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .register-input {
    font-family: inherit;
    background-color: ${(props) => props.theme.colors.mainColor};
    border-radius: 40px;
    min-width: 330px;
    min-height: 65px;
    ::placeholder {
      color: ${(props) => props.theme.colors.inputTextColor};
      padding-left: 10px;
    }
  }
`;
