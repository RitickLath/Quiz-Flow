import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type TextProperty = {
  text: string;
  styling: string;
};

const texts: TextProperty[] = [
  {
    text: "Flexibility",
    styling: "bg-gradient-to-r from-[#fde68a]  to-[#f59e0b]",
  },
  { text: "Growth", styling: "bg-gradient-to-r from-[#2dd4bf]  to-[#1f2937]" },
  {
    text: "Passions",
    styling: "bg-gradient-to-r from-[#ea580c] via-[#572e0c] to-[#78350f]",
  },
  {
    text: "Purpose",
    styling: "bg-gradient-to-r from-[#6b7280] via-[#22c55e] to-[#4ade80]",
  },
];

const LandingPage = () => {
  const [subtext, setSubtext] = useState(texts[0]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev + 1) % texts.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setSubtext(texts[count]);
  }, [count]);

  return (
    <div className="w-full h-screen bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-[#1d4ed8] via-[#1e40af] to-[#111827] text-white flex flex-col justify-center items-center px-6">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-2 tracking-wider">
          Careers with
        </h1>

        <motion.h2
          key={subtext.text}
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={`${subtext.styling} bg-clip-text text-transparent text-5xl md:text-7xl font-bold tracking-wider`}
        >
          {subtext.text}
        </motion.h2>
      </div>

      <div className="mt-3 max-w-md text-center">
        <h3 className="text-[#D9DADA] text-lg md:text-xl leading-relaxed">
          Unlock the full spectrum of careers at game-changing companies.
        </h3>
      </div>

      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 mt-6">
        <button className="text-black rounded-xl text-lg font-semibold cursor-pointer px-8 py-3 bg-white hover:bg-gray-200 transition">
          Book a Demo
        </button>
        <button className="text-white rounded-xl text-lg font-semibold cursor-pointer px-8 py-3 bg-[#545565] hover:bg-[#6b6b6c] transition">
          Take a Demo
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
