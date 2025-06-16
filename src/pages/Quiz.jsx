import { useState } from "react";
import SkinmuseLogo2 from "../assets/images/skinmuselogo2.png";

const Quiz = () => {
  const questions = [
    {
      question: "How does your skin usually feel a few hours after washing it?",
      options: [
        "Tight or rough",
        "Shiny or greasy",
        "Shiny in T-zone, dry on cheeks",
        "Comfortable and balanced",
        "Itchy, red, or easily irritated",
      ],
    },
    {
      question: "How often does your skin feel oily?",
      options: ["Rarely", "Sometimes", "Often", "Almost always"],
    },
    {
      question: "How does your skin react to the sun?",
      options: [
        "Burns easily",
        "Tans gradually",
        "Rarely burns or tans",
        "Not sure",
      ],
    },
    {
      question: "How sensitive is your skin to skincare products?",
      options: [
        "Very sensitive, reacts easily",
        "Somewhat sensitive",
        "Not sensitive at all",
        "Unsure",
      ],
    },
    {
      question: "How would you describe your skin's overall texture?",
      options: [
        "Rough or flaky",
        "Oily and smooth",
        "Combination (varies by area)",
        "Soft and even",
        "Red or irritated",
      ],
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (!selectedOption) {
      alert("Please select an answer!");
      return;
    }
    // Save answer logic can be added here

    setSelectedOption("");
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentQuestionIndex === 0) return;
    setSelectedOption("");
    setCurrentQuestionIndex((prev) => prev - 1);
  };

  if (currentQuestionIndex >= questions.length) {
    return (
      <div className="bg-gradient-to-b h-full from-[#fad1e3] to-[#ff65aa]/10 flex flex-col items-center justify-center font-kaisei min-h-screen">
        <img
          src={SkinmuseLogo2}
          alt="Skinmuse Logo"
          className="mb-16 w-72 h-auto"
        />
        <div className="w-[700px] p-8 rounded-2xl shadow-lg bg-opacity-25 backdrop-blur-md border bg-[#A55166] text-white font-inter text-center text-2xl font-bold">
          Thank you for completing the quiz!
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="bg-gradient-to-b h-full from-[#fad1e3] to-[#ff65aa]/10 flex flex-col items-center justify-center font-kaisei min-h-screen">
      {/* Moved logo further up by reducing bottom margin */}
      <img
        src={SkinmuseLogo2}
        alt="Skinmuse Logo"
        className="w-72 h-auto -mt-20"
      />

      <div className="w-[700px] p-8 rounded-2xl shadow-lg bg-opacity-25 backdrop-blur-md border bg-[#A55166]">
        <h2 className="text-white text-2xl font-bold mb-6 text-center font-inter">
          {currentQuestion.question}
        </h2>

        <div className="grid gap-4 mb-6">
          {currentQuestion.options.map((option) => (
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

        <div className="flex justify-between">
          <button
            onClick={handleBack}
            disabled={currentQuestionIndex === 0}
            className={`px-6 py-2 rounded-xl font-bold font-inter transition
              ${
                currentQuestionIndex === 0
                  ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                  : "bg-[#A55166] text-white hover:bg-[#914257]"
              }
            `}
          >
            Back
          </button>

          <button
            onClick={handleNext}
            className="bg-[#A55166] text-white px-6 py-2 rounded-xl font-bold font-inter hover:bg-[#914257] transition"
          >
            {currentQuestionIndex === questions.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
