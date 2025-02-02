interface Option {
  description: string;
  is_correct: boolean;
}

interface QuestionProps {
  question: string;
  options: Option[];
  onAnswer: (isCorrect: boolean, index: number) => void;
  selectedOption: number | null;
  selection: boolean;
}

const Question = ({
  question,
  options,
  onAnswer,
  selectedOption,
  selection,
}: QuestionProps) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-center mt-4">{question}</h1>
      <div className="space-y-3">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option.is_correct, index)}
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
    </div>
  );
};

export default Question;
