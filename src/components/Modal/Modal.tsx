import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { closeNotificationActionCreator } from "../../store/features/uiSlice/uiSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { RootState } from "../../store/store";
import { ModalStyled } from "./ModalStyled";

export const Modal = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const { displayText, open } = useAppSelector(
    (state: RootState) => state.ui.notification
  );
  const displayType = displayText.startsWith("Succeded");
  debugger;
  const closeModal = () => {
    dispatch(closeNotificationActionCreator());
  };

  return (
    <>
      {open && displayType && (
        <ModalStyled>
          <div className="modal success-modal">
            <FontAwesomeIcon
              icon={faTimesCircle}
              className="close-modal-icon"
              onClick={closeModal}
            />
            <span>{displayText}</span>
          </div>
        </ModalStyled>
      )}
      {open && !displayType && (
        <ModalStyled>
          <div className="modal error-modal">
            <FontAwesomeIcon
              icon={faTimesCircle}
              className="close-modal-icon"
              onClick={closeModal}
            />
            <span>{displayText}</span>
          </div>
        </ModalStyled>
      )}
    </>
  );
};
