import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const token = sessionStorage.getItem("access-token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/register"); // or whatever your RegisterPage route is
    }
  }, [token, navigate]);

  if (!token) return <></>;
  return <>dash</>;
};

export default Dashboard;
