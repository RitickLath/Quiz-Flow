import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface PropType {
  setStart: (value: boolean) => void;
}

const CountDown = ({ setStart }: PropType) => {
  const [num, setNum] = useState<number>(3);

  useEffect(() => {
    if (num > 0) {
      const timeout = setTimeout(() => setNum((prev) => prev - 1), 1000);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => setStart(true), 500);
    }
  }, [num]);

  return (
    <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-[#101D33] text-white">
      <motion.div
        key={num}
        initial={{ x: 100, y: -100, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-8xl font-bold"
      >
        {num > 0 ? num : "Go!"}
      </motion.div>
    </div>
  );
};

export default CountDown;
