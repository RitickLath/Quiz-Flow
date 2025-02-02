interface PropType {
  currentQuestion: number;
  totalQuestion: number;
}

const Progressbar = ({ currentQuestion, totalQuestion }: PropType) => {
  return (
    <div className="h-2 bg-gray-300 w-full">
      <div className={`h-full ${totalQuestion}`}></div>
    </div>
  );
};

export default Progressbar;
