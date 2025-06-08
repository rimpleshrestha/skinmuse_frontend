import React from "react";
import SkinmuseLogo from "../assets/images/skinmuselogo.svg";
import SkinmuseImage from "../assets/images/skinmuse_image.png";
import StarIcon from "../assets/images/star_skinmuse.svg";
import StarIcon1 from "../assets/images/star1_skinmuse.svg"; // ✅ New star image

export default function Homepage() {
  return (
    <div className="w-screen h-screen bg-[#FFEDF5] font-kaisei overflow-x-hidden">
      <header
        className="bg-white shadow flex justify-between items-center px-12"
        style={{ height: "5rem", overflow: "hidden" }}
      >
        <img
          src={SkinmuseLogo}
          alt="SkinMuse Logo"
          className="h-20 object-contain"
        />

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

      <main className="flex justify-between items-center h-[calc(100vh-5rem)] px-12">
        {/* Left side with star and text */}
        <div className="flex flex-col items-start text-left max-w-xl relative">
          {/* ⭐ Star Image above heading */}
          <img
            src={StarIcon}
            alt="Star Icon"
            className="w-10 h-10 absolute -top-10 -left-6"
          />

          <h1 className="text-5xl font-bold text-pink-700 mb-4 mt-8">
            You Are Your Own Muse
          </h1>

          <p className="text-lg text-pink-900 mb-6 leading-relaxed">
            Understand your skin, discover the right products,
            <br />
            track what works, and be your own muse.
          </p>

          {/* Line + Happy Users + new star */}
          <div className="w-full flex flex-col items-center relative">
            <div className="w-full h-[1px] bg-gray-500 opacity-70 mt-12"></div>

            {/* ⭐ New star above "500 Happy Users", aligned right */}
            <img
              src={StarIcon1}
              alt="Star Icon"
              className="w-15h-15 absolute -top-10 right-0.5"
            />

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
        </div>

        {/* Right side image */}
        <img
          src={SkinmuseImage}
          alt="SkinMuse Illustration"
          className="h-[400px] w-auto mr-12 "
        />
      </main>
    </div>
  );
}
