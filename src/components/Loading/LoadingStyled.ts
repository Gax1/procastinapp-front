import styled from "styled-components";

export const LoadingStyled = styled.div`
  z-index: 1;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgb(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;

  .loader {
    width: 100px;
    height: 100px;
    border: 5px solid #fff;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
