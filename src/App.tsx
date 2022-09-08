import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthLogin from "./components/AuthComponent/AuthLoginComponent";
import { Loading } from "./components/Loading/Loading";
import Task from "./components/Task/Task";
import { Task as Itask } from "./interfaces/interfaces";

import { DayTasksPage } from "./pages/DayTasksPage/DayTasksPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { useAppSelector } from "./store/hooks/hooks";
import { RootState } from "./store/store";

const tasks: Itask = {
  date: "22/07/2022",
  description:
    "Description of the task extended for propose of seing a long description",
  id: "id12345",
  img: "img",
  importance: "medium",
  owner: "test-id",
  title: "Title of the task",
};

function App() {
  const { isLoadding } = useAppSelector(
    (state: RootState) => state.ui.notification
  );
  return (
    <>
      {/* <div className="main-container">
        {isLoadding && <Loading />}
        <Routes>
          <Route path="/" element={<Navigate to={"/login"} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/my-day"
            element={<AuthLogin children={<DayTasksPage />} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div> */}
      <Task tasks={tasks} />
    </>
  );
}

export default App;
