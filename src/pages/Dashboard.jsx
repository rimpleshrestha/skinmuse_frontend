"use client";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardImage from "../assets/images/dashboardimage.png";

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
    <div className="bg-gradient-to-b from-[#fad1e3] to-[#ff65aa]/10 min-h-[100vh] flex flex-col md:flex-row items-center md:items-start py-12 relative">
      {/* Left side: text and button centered and pushed down */}
      <div className="border-pink-600 border-0 border-b-2 w-full flex justify-between items-center">
        <div className="flex-1 flex flex-col items-center w-full justify-end mt-16 md:mt-0">
          {/* Added text above the button */}
          <h2
            className="text-[#A55166] text-xl md:text-2xl font-medium mb-6 text-center px-4"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            To know your skin secrets, know your skin type
          </h2>

          <button
            onClick={() => navigate("/quiz")}
            className="bg-[#A55166] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#914257] transition"
            style={{ minWidth: "180px" }}
          >
            Take the Quiz
          </button>
        </div>

        {/* Right side: bigger image stuck to right edge */}
        <div className="flex-1 flex items-center justify-end w-full max-w-md md:max-w-none">
          <img
            src={DashboardImage || "/placeholder.svg"}
            alt="Dashboard"
            className="object-contain"
            style={{
              width: "350px", // Increased size here
              marginRight: 0,
              paddingRight: 0,
              display: "block",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
