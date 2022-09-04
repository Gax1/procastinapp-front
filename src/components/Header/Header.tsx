import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { HeaderStyled } from "./HeaderStyled";

interface HeaderProps {
  logout: () => void;
}

export const Header = ({ logout }: HeaderProps): JSX.Element => {
  const { isUserLoggedIn } = useSelector((state: RootState) => state.ui);

  return (
    <HeaderStyled>
      <h1 className="main-title">ProcastinapP</h1>
      {isUserLoggedIn ? <FontAwesomeIcon icon={faUser} onClick={logout} /> : ""}
    </HeaderStyled>
  );
};
