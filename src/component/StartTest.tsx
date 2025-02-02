import { useState } from "react";
import Progressbar from "./Progressbar";
import { div } from "framer-motion/client";

interface Question {
  description: string;
  options: { description: string; is_correct: boolean }[];
  detailed_solution: string;
}

interface TestData {
  questions: Question[];
}

interface PropType {
  data: TestData;
  setStartTest: (value: boolean) => void;
}

const StartTest = ({ data, setStartTest }: PropType) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [selection, setSelection] = useState(false);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showSolution, setShowSolution] = useState(false);

  if (!data || !data.questions || data.questions.length === 0) {
    return <div className="text-white text-center">No questions available</div>;
  }

  const handleNext = () => {
    if (currentQuestion < data.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setSelection(false);
      setShowSolution(false);
    }
  };

  const handleAnswer = (isCorrect: boolean, index: number) => {
    setSelectedOption(index);
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
      setAnswers((prev) => [...prev, "true"]);
    } else {
      setAnswers((prev) => [...prev, "false"]);
    }
    setSelection(true);
    setShowSolution(true);
  };

  return (
    <div className="absolute left-0 w-full h-screen flex items-center justify-center bg-[#101D33] text-white">
      <div className="w-full max-w-3xl p-6 bg-gray-800 rounded-lg shadow-lg">
        <Progressbar
          currentQuestion={currentQuestion}
          totalQuestion={data.questions.length}
        />
        <br />
        <h1 className="text-2xl font-bold mb-6 text-center">
          {data.questions[currentQuestion]?.description}
        </h1>

        <div className="space-y-3">
          {data.questions[currentQuestion]?.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.is_correct, index)}
              className={`cursor-pointer w-full p-4 text-left rounded-lg border transition-all duration-300 
              ${
                selectedOption === index
                  ? option.is_correct
                    ? "bg-green-500"
                    : "bg-red-500"
                  : "bg-gray-700"
              } ${selection ? "pointer-events-none" : ""}`}
            >
              {option.description}
            </button>
          ))}
        </div>

        {showSolution && (
          <div className="mt-4 p-4 bg-gray-700 rounded-lg">
            <h2 className="text-lg font-bold">Detailed Solution:</h2>
            <p>{data?.questions[currentQuestion].detailed_solution}</p>
          </div>
        )}

        <div className="mt-6 text-center">
          {currentQuestion < data.questions.length - 1 ? (
            <button
              onClick={handleNext}
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300"
            >
              Next Question →
            </button>
          ) : (
            <div>
              <p className="text-green-400 font-semibold">
                Quiz Completed! Score: {score}/{data.questions.length}
              </p>
              <button
                onClick={() => setStartTest(false)}
                className="mt-4 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300"
              >
                Exit Quiz
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StartTest;
