import styled from "styled-components";

export const HeaderStyled = styled.div`
  h1 {
    font-size: 30px;
  }
  background-color: ${(props) => props.theme.colors.mainColor};
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  .logout-icon {
    font-size: 1.5rem;
    margin-right: 10px;
  }
`;
