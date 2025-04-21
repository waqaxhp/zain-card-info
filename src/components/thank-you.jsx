import React from "react";
import { CheckCircle } from "lucide-react";

export default function ThankYouPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 py-12"
      style={{
        background: "linear-gradient(to left, #ff6b5e, #fcdde9)"
      }}
    >
      <div className="bg-white shadow-2xl rounded-xl p-8 max-w-lg w-full text-center space-y-6">
        <CheckCircle className="text-green-500 mx-auto h-16 w-16" />
        <h1 className="text-3xl font-bold text-gray-800">Thank You!</h1>
        <p className="text-gray-600 text-base sm:text-lg">
          Your payment has been successfully processed. You will receive a
          confirmation email to your registered address soon.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 mt-4">
          <a href="https://www.three.co.uk/">Home</a>
        </button>
      </div>
    </div>
  );
}
