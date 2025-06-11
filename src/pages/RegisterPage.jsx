import { useState } from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Email:", email);
    console.log("Password:", password);
    // Send register request here
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-[#fad1e3] to-[#ff65aa]/10 flex items-center justify-center font-kaisei">
      <form
        onSubmit={onSubmit}
        className="w-[600px] p-8 rounded-2xl shadow-lg bg-opacity-25 backdrop-blur-md border bg-[#A55166]"
      >
        <div className="mb-4">
          <label className="block mb-1 text-[#A55166] font-bold font-inter">
            Email:
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 shadow-md rounded-xl bg-white focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-[#A55166] font-bold font-inter">
            Password:
          </label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 shadow-md rounded-xl bg-white focus:outline-none"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1 text-[#A55166] font-bold font-inter">
            Confirm Password:
          </label>
          <input
            type="password"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-3 shadow-md rounded-xl bg-white focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#A55166] text-white py-3 rounded-xl font-bold font-inter hover:bg-[#914257] transition"
        >
          Register
        </button>
        <p className="text-white text-center mt-4 font-inter">
          Already have an account?{" "}
          <Link to="/signup" className="underline hover:text-[#ffd5eb]">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
