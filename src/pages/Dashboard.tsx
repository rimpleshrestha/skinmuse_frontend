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
  return (
    <div className="bg-[#f9f9f9] p-12 min-h-[100vh]">
      <h2 className="text-xl font-semibold">Hello To Dashboard 👋</h2>
    </div>
  );
};

export default Dashboard;
