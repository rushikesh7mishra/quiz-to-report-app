import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";

export default function StartCheckout() {
  useEffect(() => {
    const start = async () => {
      const res = await fetch("/api/createCheckoutSession");
      const data = await res.json();
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
      await stripe.redirectToCheckout({ sessionId: data.id });
    };
    start();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 flex items-center justify-center">
      <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl text-center max-w-sm w-full">
        <h2 className="text-xl font-semibold text-gray-800">Redirecting to Payment...</h2>
        <p className="text-sm text-gray-600 mt-2">
          Please wait while we securely connect you to Stripe Checkout.
        </p>
      </div>
    </div>
  );
}
