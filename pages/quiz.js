import { useState } from "react";

const questions = [
  {
    question: "What does `npm run dev` do in a Next.js project?",
    options: [
      "Starts a production server",
      "Runs tests",
      "Starts development server",
      "Builds the app",
    ],
    answer: 2,
  },
  {
    question: "Which file contains environment variables in Next.js?",
    options: [".nextenv", ".env.local", "env.js", ".env.config"],
    answer: 1,
  },
  {
    question: "What is Stripe primarily used for?",
    options: [
      "Deploying apps",
      "Authentication",
      "Payments & Billing",
      "Database Management",
    ],
    answer: 2,
  },
  {
    question: "What does `HttpOnly` cookie mean?",
    options: [
      "Only available to JavaScript",
      "Only used on HTTP, not HTTPS",
      "Only accessible by the server",
      "Cookies that are hidden from users",
    ],
    answer: 2,
  },
  {
    question: "Which command builds your Next.js project?",
    options: ["npm run start", "npm run build", "next serve", "npm dev"],
    answer: 1,
  },
];

export default function Quiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [reportData, setReportData] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (index) => {
    const current = questions[currentQ];
    const isCorrect = index === current.answer;

    const newEntry = {
      question: current.question,
      correctAnswer: current.options[current.answer],
      yourAnswer: current.options[index],
      isCorrect,
    };

    const updatedReport = [...reportData, newEntry];
    setReportData(updatedReport);

    if (isCorrect) setScore(score + 1);

    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      localStorage.setItem("reportData", JSON.stringify(updatedReport));
      setShowResult(true);
    }
  };

  const handleRetry = () => {
    localStorage.removeItem("reportData");
    setCurrentQ(0);
    setScore(0);
    setReportData([]);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex items-center justify-center px-4 py-8">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-8">
        {!showResult ? (
          <>
            <h2 className="text-3xl font-extrabold text-indigo-700 mb-4 text-center">
              Technical Quiz
            </h2>
            <p className="text-sm text-gray-600 text-center mb-6">
              Question {currentQ + 1} of {questions.length}
            </p>
            <h3 className="text-lg font-medium text-gray-800 mb-4 text-center">
              {questions[currentQ].question}
            </h3>
            <div className="flex items-center justify-center bg-gray-50 p-4">
              <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 w-[30%] mx-auto bg-white p-6 rounded-xl shadow-lg">
                {questions[currentQ].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    className="px-4 py-2 bg-gray-100 hover:bg-indigo-100 text-sm text-gray-800 rounded-lg border border-gray-200 shadow-sm transition duration-200 text-left"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-extrabold text-indigo-700">
              Quiz Complete!
            </h2>
            <p className="text-lg text-gray-700 font-medium">
              Your Score:{" "}
              <span className="font-bold">
                {score} / {questions.length}
              </span>
            </p>

            {score >= 3 ? (
              <>
                <p className="text-green-600 font-semibold text-xl">
                  🎉 You passed the quiz!
                </p>
                <button
                  onClick={() => (window.location.href = "/start-checkout")}
                  className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition shadow-lg hover:shadow-xl"
                >
                  View Full Report ($10.99)
                </button>
              </>
            ) : (
              <>
                <p className="text-red-600 font-semibold text-xl">
                  ❌ You didn’t pass. Minimum score is 3.
                </p>
                <button
                  onClick={handleRetry}
                  className="bg-gray-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-700 transition shadow"
                >
                  Retry Quiz
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
