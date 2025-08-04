export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-200 p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full text-center">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-6">
          Welcome to Quiz Portal
        </h1>

        <a
          href="/quiz"
          className="relative inline-block px-8 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg overflow-hidden"
        >
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            Start Quiz →
          </span>
        </a>
      </div>
    </div>
  );
}
