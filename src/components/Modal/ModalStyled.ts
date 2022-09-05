import styled from "styled-components";

export const ModalStyled = styled.div`
  z-index: 1;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgb(231, 225, 213, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  .modal {
    width: 50%;
    height: 30%;
    margin: 15% auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    position: relative;
  }
  .close-modal-icon {
    position: absolute;
    right: 5%;
    top: 5%;
    font-size: 40px;
    cursor: pointer;
  }
  .success-modal {
    background-color: rgb(28, 219, 60, 0.6);
  }
  .error-modal {
    background-color: rgb(255, 0, 0, 0.8);
  }
`;
