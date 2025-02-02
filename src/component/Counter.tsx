import { useEffect, useState } from "react";

interface PropType {
  setCurrentQuestion: (value: number) => void;
  total: number;
}

const Counter = ({ setCurrentQuestion, total }: PropType) => {
  const [count, setCount] = useState(180);
  const [isRunning, setIsRunnig] = useState(true);

  useEffect(() => {
    if (count == 0) {
      setIsRunnig(false);
      setCurrentQuestion(total);
      return;
    }
    if (isRunning) {
      const timerId = setInterval(() => {
        setCount((count) => count - 1);
      }, 1000);

      return () => clearInterval(timerId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, isRunning]);

  return (
    <div className="rounded-full flex justify-end text-xl">
      <h1 className="border-2 p-3 rounded-full mb-2">{count}</h1>
    </div>
  );
};

export default Counter;
