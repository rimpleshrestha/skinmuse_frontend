import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const token = sessionStorage.getItem("access-token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/register"); // Redirect if no token
    }
  }, [token, navigate]);

  if (!token) return <></>;

  return (
    <div className="bg-[#f9f9f9] p-12 min-h-[100vh]">
      <h2 className="text-xl font-semibold mb-6">Hello To Dashboard 👋</h2>

      <button
        onClick={() => navigate("/quiz")}
        className="bg-[#A55166] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#914257] transition"
      >
        Take the Quiz
      </button>
    </div>
  );
};

export default Dashboard;
