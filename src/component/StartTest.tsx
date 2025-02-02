import { useState, useEffect } from "react";
import CountDown from "./CountDown";
import Progressbar from "./Progressbar";
import ExitButton from "./ExitButton";
import Question from "./Question";
import Solution from "./Solution";
import Navigation from "./Navigation";
import Counter from "./Counter";

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
  const [, setAnswers] = useState<string[]>([]);
  const [showSolution, setShowSolution] = useState(false);
  const [start, setStart] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

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
    <div className="w-full mt-12 flex items-center justify-center bg-[#101D33] text-white">
      {!start && <CountDown setStart={setStart} />}
      {start && (
        <div className="relative w-full max-w-3xl p-6 bg-gray-800 rounded-lg shadow-lg">
          <ExitButton onExit={() => setStartTest(false)} />
          <br />
          <br />
          <Counter
            setCurrentQuestion={setCurrentQuestion}
            total={data.questions.length}
          />
          <Progressbar
            currentQuestion={currentQuestion + 1}
            totalQuestion={data.questions.length}
          />
          <Question
            question={data.questions[currentQuestion]?.description}
            options={data.questions[currentQuestion]?.options}
            onAnswer={handleAnswer}
            selectedOption={selectedOption}
            selection={selection}
          />
          {showSolution && (
            <Solution
              solution={data.questions[currentQuestion].detailed_solution}
            />
          )}
          <Navigation
            totalQuestions={data.questions.length}
            onNext={handleNext}
            score={score}
            isQuizComplete={currentQuestion === data.questions.length - 1}
            onExit={() => setStartTest(false)}
          />
        </div>
      )}
    </div>
  );
};

export default StartTest;
