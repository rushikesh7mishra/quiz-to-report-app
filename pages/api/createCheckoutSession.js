import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  try {
    const baseUrl = process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.NEXT_PUBLIC_BASE_URL;

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/payment-success`,
      cancel_url: `${baseUrl}/quiz`,
    });

    res.status(200).json({ id: session.id });
  } catch (err) {
    console.error("Stripe error:", err);
    res.status(500).json({ error: err.message });
  }
}
