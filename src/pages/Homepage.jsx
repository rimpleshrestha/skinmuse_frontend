import React from "react";
import SkinmuseLogo from "../assets/images/skinmuselogo.svg";

export default function Homepage() {
  return (
    <div className="w-screen h-screen bg-[#FFEDF5] font-kaisei">
      <header
        className="bg-white shadow flex justify-between items-center px-12"
        style={{ height: "5rem", overflow: "hidden" }}
      >
        {/* Logo on left */}
        <img
          src={SkinmuseLogo}
          alt="SkinMuse Logo"
          className="h-20 object-contain"
        />

        {/* Navigation links with Inter, bold, pink default and soft pink hover */}
        <nav className="flex gap-20 font-inter font-bold text-[#A55166]">
          <a href="#login" className="hover:text-[#E17C96]">
            Login
          </a>
          <a href="#home" className="hover:text-[#E17C96]">
            Home
          </a>
          <a href="#about" className="hover:text-[#E17C96]">
            About Us
          </a>
        </nav>
      </header>

      <main className="flex flex-col items-start justify-center h-[calc(100vh-5rem)] px-12 text-left">
        <h1 className="text-5xl font-bold text-pink-700 mb-4">
          You Are Your Own Muse
        </h1>
        <p className="text-lg text-pink-900 max-w-xl mb-6 leading-relaxed">
          Understand your skin, discover the right products,
          <br />
          track what works, and be your own muse.
        </p>

        {/* Two parallel lines with text between */}
        <div className="w-full max-w-xl flex flex-col items-center">
          <div className="w-full h-[1px] bg-gray-500 opacity-70"></div>

          <p
            className="my-10 text-center text-gray-800 text-3xl"
            style={{
              fontFamily: "'Julius Sans One', sans-serif",
              fontWeight: "normal",
            }}
          >
            500 Happy Users, Are You Next?
          </p>

          <div className="w-full h-[1px] bg-gray-500 opacity-70"></div>
        </div>
      </main>
    </div>
  );
}
