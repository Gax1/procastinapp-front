import { faReply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Header } from "../../components/Header/Header";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

export const RegisterPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <div className="page-title-container">
        <span className="page-title navigation-arrow">
          <FontAwesomeIcon className="icon" icon={faReply} />
        </span>
        <h2 className="page-title">Register</h2>
      </div>
      <RegisterForm />
    </>
  );
};
