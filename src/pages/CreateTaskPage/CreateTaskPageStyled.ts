import styled from "styled-components";

const CreateTaskPageStyled = styled.div`
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
`;

export default CreateTaskPageStyled;
