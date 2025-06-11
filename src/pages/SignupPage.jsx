import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import SkinmuseLogo2 from "../assets/images/skinmuselogo2.png";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    const response = await axios.post("http://localhost:3000/api/login", {
      email,
      password,
    });
    if ([200, 201].includes(response.status)) {
      toast.success("Logged in successfully!");
      navigate("/dashboard");
      sessionStorage.setItem("access-token", response.data.accessToken);
    } else {
      toast.success("Logged in Failed!");
    }
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-[#fad1e3] to-[#ff65aa]/10 flex flex-col items-center justify-center font-kaisei">
      {/* Logo Image above form - bigger size */}
      <img
        src={SkinmuseLogo2}
        alt="Skinmuse Logo"
        className="mb-8 w-72 h-auto"
      />

      <form
        onSubmit={onSubmit}
        className="w-[600px] p-8 rounded-2xl shadow-lg bg-opacity-25 backdrop-blur-md border bg-[#A55166]"
      >
        {/* Email Field */}
        <div className="mb-4">
          <label className="block mb-1 text-[#A55166] font-bold font-inter">
            Email:
          </label>
          <input
            type="email"
            name="email"
            placeholder="toffee@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 shadow-md rounded-xl bg-white focus:outline-none"
          />
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label className="block mb-1 text-[#A55166] font-bold font-inter">
            Password:
          </label>
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 shadow-md rounded-xl bg-white focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#A55166] text-white py-3 rounded-xl font-bold font-inter hover:bg-[#914257] transition"
        >
          Log In
        </button>

        {/* Centered "Don't have an account?" line */}
        <p
          className="text-black font-bold mt-4 text-center w-full"
          style={{ fontFamily: "'Julius Sans One', sans-serif" }}
        >
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-black font-bold no-underline hover:no-underline"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
