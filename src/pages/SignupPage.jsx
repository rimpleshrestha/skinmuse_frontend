import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    const respoonse = await axios.post("http://localhost:3000/api/login", {
      email,
      password,
    });
    console.log("response", await respoonse.data);
    toast.success("fuck yueahh");
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-[#fad1e3] to-[#ff65aa]/10 flex items-center justify-center font-kaisei">
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
      </form>
    </div>
  );
};

export default SignupPage;
