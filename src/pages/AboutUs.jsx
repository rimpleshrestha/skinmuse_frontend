import React from "react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fad1e3] to-[#ffedf5] flex flex-col items-center px-6 py-16 font-inter">
      {/* Motto */}
      <h1
        className="text-4xl md:text-6xl font-bold text-[#A55166] text-center mb-10"
        style={{ fontFamily: "'Julius Sans One', sans-serif" }}
      >
        “You Are Your Own Muse”
      </h1>

      <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mb-16">
        At SkinMuse, we believe that beauty is personal and unique. Our mission
        is to help you understand your skin better, discover the right products,
        and track what works best for you – empowering you to be your own muse.
      </p>

      {/* Flow of the App */}
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold text-[#A55166] mb-8 text-center">
          How SkinMuse Works
        </h2>

        <div className="flex flex-col gap-8">
          <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-[#A55166] mb-2">
              Step 1: Take the Skin Quiz
            </h3>
            <p className="text-gray-600">
              Answer a few quick questions to understand your skin type and its
              unique needs.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-[#A55166] mb-2">
              Step 2: Get Personalized Recommendations
            </h3>
            <p className="text-gray-600">
              Explore curated product suggestions tailored specifically for your
              skin type and concerns.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-[#A55166] mb-2">
              Step 3: Track Your Journey
            </h3>
            <p className="text-gray-600">
              Keep a log of what works best for you, track your routine, and see
              your progress over time.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-[#A55166] mb-2">
              Step 4: Be Your Own Muse
            </h3>
            <p className="text-gray-600">
              With the right tools and insights, embrace your natural beauty and
              take control of your skincare journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
