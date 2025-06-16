import { useState } from "react";
import SkinmuseLogo2 from "../assets/images/skinmuselogo2.png";

const Quiz = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (!selectedOption) return alert("Please select an answer!");
    console.log("Selected answer:", selectedOption);
    // TODO: add next question logic here
  };

  return (
    <div className="bg-gradient-to-b h-full from-[#fad1e3] to-[#ff65aa]/10 flex flex-col items-center justify-center font-kaisei min-h-screen">
      <img
        src={SkinmuseLogo2}
        alt="Skinmuse Logo"
        className="mb-8 w-72 h-auto transform -translate-y-8"
      />

      <div className="w-[800px] p-8 rounded-2xl shadow-lg bg-opacity-25 backdrop-blur-md border bg-[#A55166] -mt-14">
        <h2 className="text-white text-2xl font-bold mb-6 text-center font-inter">
          How does your skin usually feel a few hours after washing it?
        </h2>

        <div className="grid gap-4">
          {[
            "Tight or rough",
            "Shiny or greasy",
            "Shiny in T-zone, dry on cheeks",
            "Comfortable and balanced",
            "Itchy, red, or easily irritated",
          ].map((option) => (
            <div
              key={option}
              onClick={() => handleOptionClick(option)}
              className={`p-4 rounded-xl shadow-md cursor-pointer text-center font-inter font-bold transition-transform duration-200
                ${
                  selectedOption === option
                    ? "bg-[#A55166] text-white -translate-y-1"
                    : "bg-white text-[#A55166] hover:bg-[#A55166] hover:text-white hover:-translate-y-1"
                }
              `}
            >
              {option}
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={handleNext}
            className="bg-[#A55166] text-white px-6 py-2 rounded-xl font-bold font-inter hover:bg-[#914257] transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
