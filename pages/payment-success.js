import { useEffect } from "react";

export default function PaymentSuccess() {
  useEffect(() => {
    const setCookie = async () => {
      await fetch("/api/setPaymentCookie");
      window.location.href = "/full-report";
    };

    setCookie();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-emerald-200 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-sm w-full">
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 text-green-600 rounded-full p-4 animate-bounce shadow-inner">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-green-700 mb-2">Payment Successful!</h2>
        <p className="text-sm text-gray-600">Redirecting to your full report...</p>
      </div>
    </div>
  );
}
