type RemarkType = {
  percentage: string;
  remarks: string;
  description: string;
};

const Remarks: RemarkType[] = [
  {
    percentage: "90-100%",
    remarks: "🔥 Excellent",
    description: "You're a Quiz Master! Well done!",
  },
  {
    percentage: "70-89%",
    remarks: "👏 Good",
    description: "Great Job! Keep going!",
  },
  {
    percentage: "50-69%",
    remarks: "👍 Average",
    description: "Good effort! Try again for a higher score!",
  },
  {
    percentage: "Below 50%",
    remarks: "💡 Needs Improvement",
    description: "Keep learning! You can do better next time!",
  },
];
const Evaluation = () => {
  return (
    <div className="bg-[#101D33] text-white flex flex-col items-center justify-center min-h-screen px-6 py-10">
      <h4 className="text-lg font-semibold text-gray-400 uppercase tracking-wider">
        #Performance Criteria
      </h4>
      <h1 className="w-[95%] text-3xl sm:text-5xl font-bold mb-10 tracking-wide text-center">
        What's Your Mark Tells?
      </h1>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {Remarks.map((value, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl shadow-lg bg-gray-800 transition-transform duration-300 hover:scale-105 hover:shadow-xl border border-gray-700"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl sm:text-2xl font-bold text-blue-400">
                {value.percentage}
              </h2>
              <h3 className="text-lg sm:text-xl font-semibold text-yellow-300">
                {value.remarks}
              </h3>
            </div>
            <p className="text-gray-300">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Evaluation;
