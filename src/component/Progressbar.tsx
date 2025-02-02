interface PropType {
  currentQuestion: number;
  totalQuestion: number;
}

const Progressbar = ({ currentQuestion, totalQuestion }: PropType) => {
  const currentWidth = (100 * currentQuestion) / (totalQuestion);

  return (
    <div className="h-2 bg-gray-300 w-full rounded-lg overflow-hidden">
      <div
        className="h-full bg-red-400 transition-all duration-500 ease-in-out"
        style={{ width: `${currentWidth}%` }}
      ></div>
    </div>
  );
};

export default Progressbar;
