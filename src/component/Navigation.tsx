interface NavigationProps {
  totalQuestions: number;
  onNext: () => void;
  score: number;
  isQuizComplete: boolean;
  onExit: () => void;
}

const Navigation = ({
  totalQuestions,
  onNext,
  score,
  isQuizComplete,
  onExit,
}: NavigationProps) => {
  return (
    <div className="mt-6 text-center">
      {isQuizComplete ? (
        <div>
          <p className="text-green-400 font-semibold">
            Quiz Completed! Score: {score}/{totalQuestions}
          </p>
          <button
            onClick={onExit}
            className="mt-4 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300"
          >
            Exit Quiz
          </button>
        </div>
      ) : (
        <button
          onClick={onNext}
          className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300"
        >
          Next Question →
        </button>
      )}
    </div>
  );
};

export default Navigation;
