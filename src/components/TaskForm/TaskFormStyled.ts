import styled from "styled-components";

export const TaskFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  .form-input {
    font-family: inherit;
    background-color: ${(props) => props.theme.colors.mainColor};
    border-radius: ${(props) => props.theme.borderRadius};
    width: ${(props) => props.theme.inputsSizesMobile.mobileWidth};
    height: ${(props) => props.theme.inputsSizesMobile.mobileHeigth};
    border: none;
    text-align: center;
  }
  .task-input__date {
    font-size: 20px;
  }
  select {
    font-family: inherit;
    background-color: ${(props) => props.theme.colors.mainColor};
    border-radius: ${(props) => props.theme.borderRadius};
    width: ${(props) => props.theme.inputsSizesMobile.mobileWidth};
    height: ${(props) => props.theme.inputsSizesMobile.mobileHeigth};
    border: none;
    text-align: center;
  }
`;
