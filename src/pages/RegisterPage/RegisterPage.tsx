import { faReply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Modal } from "../../components/Modal/Modal";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { RegisterPageStyled } from "./RegisterPageStyled";

export const RegisterPage = (): JSX.Element => {
  return (
    <>
      <Modal></Modal>
      <RegisterPageStyled>
        <Header />
        <div className="page-title-container">
          <span className="page-title navigation-arrow">
            <NavLink to={"/login"}>
              <FontAwesomeIcon className="icon" icon={faReply} />
            </NavLink>
          </span>
          <h2 className="page-title">Register</h2>
          <span>&nbsp; </span>
        </div>
        <RegisterForm />
      </RegisterPageStyled>
    </>
  );
};
