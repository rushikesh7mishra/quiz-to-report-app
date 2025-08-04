import { useEffect, useState } from "react";

export default function FullReport() {
  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("reportData");
    if (data) setReportData(JSON.parse(data));
  }, []);

  if (!reportData.length) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-100">
        <p className="text-xl font-medium text-indigo-600 animate-pulse">Generating Report...</p>
      </div>
    );
  }

  const correctCount = reportData.filter((item) => item.isCorrect).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 py-10 px-4 flex items-center justify-center">
      <div className="backdrop-blur-xl bg-white/80 rounded-2xl shadow-2xl p-8 w-full max-w-3xl">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-4 text-center">
          📊 Full Quiz Report
        </h1>
        <p className="text-lg text-center text-gray-700 mb-8">
          You answered <strong>{correctCount}</strong> out of{" "}
          <strong>{reportData.length}</strong> questions correctly.
        </p>

        <ul className="space-y-5 list-none">
          {reportData.map((item, idx) => (
            <li
              key={idx}
              className={`p-5 rounded-xl shadow-sm ${
                item.isCorrect ? "border-green-400 bg-green-50" : "border-red-400 bg-red-50"
              }`}
            >
              <h2 className="text-md font-semibold text-gray-800 mb-1">
                {idx + 1}. {item.question}
              </h2>
              <div className="text-sm">
                <p className="mb-1">
                  <span className="font-medium text-gray-700">Correct Answer:</span>{" "}
                  <span className="font-semibold">{item.correctAnswer}</span>
                </p>
                <p>
                  <span className="font-medium text-gray-700">Your Answer:</span>{" "}
                  <span className={`font-semibold ${item.isCorrect ? "text-green-700" : "text-red-700"}`}>
                    {item.yourAnswer} {item.isCorrect ? "✔️" : "❌"}
                  </span>
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <a
            href="/"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-200"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
