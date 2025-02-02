import axios from "axios";
import { useEffect, useState } from "react";
import StartTest from "../StartTest";

const PlayQuiz = () => {
  const [APIResponse, setAPIResponse] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [startTest, setStartTest] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get("/api");
        setAPIResponse(response.data);
      } catch (err) {
        setError("Failed to load quiz. Please try again later. " + err);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div className="bg-[#101D33] text-white flex flex-col items-center justify-center min-h-screen px-6 py-10">
      {startTest && (
        <StartTest data={APIResponse} setStartTest={setStartTest} />
      )}
      <div className={`${startTest ? "hidden" : ""}`}>
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 tracking-wide text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Take a Free Quiz Demo
        </h1>

        {loading ? (
          <div className="text-gray-300 text-xl font-semibold">
            Loading Quiz...
          </div>
        ) : error ? (
          <div className="text-red-500 text-lg">{error}</div>
        ) : (
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg max-w-lg w-full text-center">
            <h2 className="text-2xl font-bold text-white">
              {APIResponse?.title || "Opps! Something went Wrong"}
            </h2>

            <div className="mt-3 text-gray-300 space-y-2 text-left">
              <p className="text-lg">
                <span className="font-semibold">Topic:</span>{" "}
                {APIResponse?.topic || "Anonymous Topic"}
              </p>
              <p className="text-lg">
                <span className="font-semibold">
                  Date: {APIResponse?.daily_date}
                </span>{" "}
                {APIResponse?.date || Date.now()}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Duration:</span>{" "}
                {APIResponse?.duration || "N/A"} mins
              </p>
            </div>

            <button
              onClick={() => {
                if (localStorage.getItem("Demo")) {
                  alert("You Already Have Taken Free Demo");
                  //setStartTest(true); // make it false after testing
                } else {
                  localStorage.setItem("Demo", "Played");
                  setStartTest(true);
                }
              }}
              className="mt-4 text-white rounded-xl text-lg font-semibold cursor-pointer px-8 py-3 bg-gray-600 hover:bg-gray-700 transition"
            >
              Start Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlayQuiz;
