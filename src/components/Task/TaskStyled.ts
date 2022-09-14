import styled from "styled-components";

const TaskStyled = styled.section`
  background-color: ${(props) => props.theme.colors.secondaryColor};
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 90%;
  .task-card-header {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    margin-top: 20px;
  }
  .task-description {
    width: 85%;
  }
  .circle {
    height: 35px;
    width: 35px;
    border-radius: 50%;
    border: 17.5px solid;
    margin-right: 10px;
  }
  .circle__very {
    border-color: red;
  }
  .circle__medium {
    border-color: orange;
  }
  .circle__small {
    border-color: green;
  }
  .icons-footer {
    font-size: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    margin-bottom: 20px;
  }
`;

export default TaskStyled;
