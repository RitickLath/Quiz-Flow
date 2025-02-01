import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type TextProperty = {
  text: string;
  styling: string;
};

const texts: TextProperty[] = [
  {
    text: "Flexibility",
    styling: "bg-gradient-to-r from-yellow-300 to-yellow-600",
  },
  {
    text: "Growth",
    styling: "bg-gradient-to-r from-teal-400 to-gray-900",
  },
  {
    text: "Passions",
    styling: "bg-gradient-to-r from-orange-600 via-brown-800 to-yellow-900",
  },
  {
    text: "Purpose",
    styling: "bg-gradient-to-r from-gray-500 via-green-500 to-green-400",
  },
];

const Landing = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <div className="bg-[#101D33] z-10 fixed -top-8 w-full h-[100px] md:h-[110px] lg:h-[120px] shadow-md">
        <img
          className="w-32 md:w-36 h-auto"
          src="/images/Arena.png"
          alt="Logo"
        />
      </div>

      <div className="px-2 w-full min-h-screen bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-[#1d4ed8] via-[#1e40af] to-[#111827] text-white flex flex-col justify-center items-center px-6">
        <div className="text-center">
          <h4 className="bg-clip-text text-transparent font-semibold bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#b91c1c] via-[#ef4444] to-[#fca5a5]">
            QUIZ ARENA
          </h4>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-2 tracking-wider">
            Careers with
          </h1>

          <motion.h2
            key={texts[count].text}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={`text-transparent bg-clip-text text-4xl sm:text-5xl md:text-7xl font-bold tracking-wider ${texts[count].styling}`}
          >
            {texts[count].text}
          </motion.h2>
        </div>

        <div className="mt-3 max-w-md text-center">
          <h3 className="max-w-[400px] text-gray-300 text-lg md:text-xl leading-relaxed">
            Unlock the full spectrum of careers at game-changing companies.
          </h3>
        </div>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 mt-6">
          <button className="text-black rounded-xl text-lg font-semibold cursor-pointer px-8 py-3 bg-white hover:bg-gray-200 transition">
            Book a Demo
          </button>
          <button className="text-white rounded-xl text-lg font-semibold cursor-pointer px-8 py-3 bg-gray-600 hover:bg-gray-700 transition">
            Take a Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
