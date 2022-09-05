import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useUsers } from "../../store/hooks/userHook";
import { RootState } from "../../store/store";
import { HeaderStyled } from "./HeaderStyled";

export const Header = (): JSX.Element => {
  const { isUserLoggedIn } = useSelector((state: RootState) => state.ui);
  const { logOutUser } = useUsers();

  return (
    <HeaderStyled>
      {isUserLoggedIn && <span>&nbsp; </span>}
      <h1 className="main-title">ProcastinapP</h1>
      {isUserLoggedIn && (
        <NavLink to={"/login"}>
          <FontAwesomeIcon
            icon={faSignOut}
            onClick={logOutUser}
            className="logout-icon"
          />
        </NavLink>
      )}
    </HeaderStyled>
  );
};
