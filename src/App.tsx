import { useMemo } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthLogin from "./components/AuthComponent/AuthLoginComponent";
import { Loading } from "./components/Loading/Loading";
import { Modal } from "./components/Modal/Modal";
import CreateTaskPage from "./pages/CreateTaskPage/CreateTaskPage";
import { DayTasksPage } from "./pages/DayTasksPage/DayTasksPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { loginUserActionCreator } from "./store/features/usersSlice/usersSlice";
import { useAppDispatch, useAppSelector } from "./store/hooks/hooks";
import { RootState } from "./store/store";

function App() {
  const dispatch = useAppDispatch();
  const { isLoadding } = useAppSelector(
    (state: RootState) => state.ui.notification
  );

  const user = localStorage.getItem("user");
  useMemo(() => {
    if (user) {
      dispatch(loginUserActionCreator(JSON.parse(user)));
    }
  }, [user, dispatch]);

  return (
    <>
      <div className="main-container">
        {isLoadding && <Loading />}
        <Modal />
        <Routes>
          <Route path="/" element={<Navigate to={"/login"} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/my-day"
            element={<AuthLogin children={<DayTasksPage />} />}
          />
          <Route
            path="/my-day/create-task"
            element={<AuthLogin children={<CreateTaskPage />} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
