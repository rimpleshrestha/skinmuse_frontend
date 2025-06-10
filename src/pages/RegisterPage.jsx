const RegisterPage = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-b from-[#fad1e3] to-[#ff65aa]/10 flex items-center justify-center font-kaisei">
      <div className="w-[600px] p-8 rounded-2xl shadow-lg  bg-opacity-25 backdrop-blur-md border bg-[#A55166]">
        {/* Email Field */}
        <div className="mb-4">
          <label className="block mb-1 text-[#A55166] font-bold font-inter">
            Email:
          </label>
          <input
            type="email"
            placeholder="toffee@example.com"
            className="w-full p-3 shadow-md rounded-xl  bg-white focus:outline-none "
          />
        </div>
        {/* mobile swtch ofof bhayo  */}
        {/* Password Field */}
        <div className="mb-6">
          <label className="block mb-1 text-[#A55166] font-bold font-inter">
            Password:
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full p-3 shadow-md rounded-xl  bg-white focus:outline-none "
          />
        </div>

        {/* Submit Button */}
        <button className="w-full bg-[#A55166] text-white py-3 rounded-xl font-bold font-inter hover:bg-[#914257] transition">
          Log In
        </button>
      </div>
    </div>
  );
};
export default SignupPage;
