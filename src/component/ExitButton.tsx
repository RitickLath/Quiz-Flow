interface ExitButtonProps {
  onExit: () => void;
}

const ExitButton = ({ onExit }: ExitButtonProps) => (
  <button
    onClick={onExit}
    className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-red-500 transition duration-300"
  >
    ✖
  </button>
);

export default ExitButton;
