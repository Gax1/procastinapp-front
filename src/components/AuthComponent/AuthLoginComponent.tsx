import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks/hooks";
import { RootState } from "../../store/store";

interface AuthProps {
  children: JSX.Element;
}

const AuthLogin = ({ children }: AuthProps): JSX.Element => {
  const { isUserLoggedIn } = useAppSelector((state: RootState) => state.ui);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate("/login");
    }
  }, [navigate, isUserLoggedIn]);

  return children;
};

export default AuthLogin;
