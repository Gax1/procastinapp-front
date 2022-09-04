import { faSignOut, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { useUsers } from "../../store/hooks/userHook";
import { RootState } from "../../store/store";
import { HeaderStyled } from "./HeaderStyled";

export const Header = (): JSX.Element => {
  const { isUserLoggedIn } = useSelector((state: RootState) => state.ui);
  const { logOutUser } = useUsers();

  return (
    <HeaderStyled>
      <h1 className="main-title">ProcastinapP</h1>
      {isUserLoggedIn ? (
        <FontAwesomeIcon
          icon={faSignOut}
          onClick={logOutUser}
          className="logout-icon"
        />
      ) : (
        ""
      )}
    </HeaderStyled>
  );
};
