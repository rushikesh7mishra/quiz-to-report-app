# 🧠 Quiz-to-Payment-to-Report App (Next.js + Stripe)

This is a modern full-stack web application built using **Next.js** that allows users to take a technical quiz. Once they complete the quiz and pass with a minimum score, they can **pay $10.99 via Stripe** to view a **detailed report** of their answers.

---

## 📌 Features

- ✅ Technical multiple-choice quiz
- 🔐 Result access protected using **secure HttpOnly cookies**
- 💳 Integrated with **Stripe Checkout** for payment
- 🎯 Score validation (minimum score required to proceed)
- 📈 Dynamic full report generated from user's answers
- ☁️ Serverless API routes for payment and cookie handling
- 💅 Styled using **Tailwind CSS**
- ⚙️ SEO-friendly and production-ready with Next.js

---

## 🧱 Tech Stack

| Layer        | Tech               |
|--------------|--------------------|
| Frontend     | React + Next.js    |
| Styling      | Tailwind CSS       |
| Payment      | Stripe Checkout    |
| Auth Logic   | Cookie-based (no login) |
| State        | React `useState`, `useEffect` |
| Deployment   | Vercel |

---

## 🗂 Project Structure

📦 root
├── pages/
│ ├── quiz.js # Quiz component (questions, options, score logic)
│ ├── start-checkout.js # Redirects to Stripe Checkout
│ ├── payment-success.js # Sets secure cookie, redirects to full report
│ ├── full-report.js # Protected report page
│
├── pages/api/
│ ├── createCheckoutSession.js # Creates a Stripe checkout session
│ └── setPaymentCookie.js # Sets hasPaid cookie on success
│
├── public/
├── styles/
├── .env.local # Environment variables for Stripe
├── README.md
└── package.json


## ⚙️ Local Setup

### 1. Clone the repo

git clone https://github.com/rushikesh7mishra/quiz-to-report-app
cd quiz-to-report-app

npm install

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PRICE_ID=price_...

npm run dev

Then go to: http://localhost:3000
