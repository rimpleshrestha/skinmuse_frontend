import {
  Routes,
  Route,
  NavLink,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Homepage from "../pages/Homepage";
import SignupPage from "../pages/SignupPage";
import RegisterPage from "../pages/RegisterPage";
import Dashboard from "../pages/Dashboard";
import { Toaster } from "react-hot-toast";
import MainLayout from "../layouts/MainLayout";

const AppRouter = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [token, setToken] = useState(sessionStorage.getItem("access-token"));

  useEffect(() => {
    const newToken = sessionStorage.getItem("access-token");
    setToken(newToken);
  }, [location]); // triggers when route changes — especially after login

  const logout = () => {
    sessionStorage.removeItem("access-token");
    setToken(null);
    navigate("/register");
  };

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
};

export default AppRouter;
