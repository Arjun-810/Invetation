import React, { useState } from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

export default function ContactUs() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [noAdults, setNoAdults] = useState(0);
  const [noChild2_10, setNoChild2_10] = useState(0);
  const [noChildAbv10, setNoChildAbv10] = useState(0);

  const [errors, setErrors] = useState({});
  const stripePromise = loadStripe("pk_test_51Niz44SGHVtRwH6Ga8h1zI4iCkRk3FGDbQcTIyF9tSreS1n519miwd9SyBd9e36z9IV0nkzh4Nzps9cARFClMiRb009ycVLfdQ");
  const [buttonText, setButtonText] = useState("PAY");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (contactNo.length < 10) {
      tempErrors["contactNo"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    return isValid;
  };
    
    const handleCheckout = async (e) => {
      const d = {amount: 500}
      try {
        const stripe = await stripePromise;
        const response = await fetch("/api/checkout_sessions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(d)
        });
  
        const { sessionId } = await response.json();
        const { error } = await stripe.redirectToCheckout({
          sessionId,
        });
  
        if (error) {
          router.push("/error");
        }
      } catch (err) {
        console.error("Error in creating checkout session:", err);
        }
    };
    

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("LODING");
      const data = {
        name: fullname,
        email: email,
        contact_no: contactNo,
        adults : noAdults,
        child2_10 : noChild2_10,
        childAbv10: noChildAbv10
      };
      axios({
        url: "/api/sendEmail",
        method: "POST",
        data,
      })
        .then((data) => {
          console.log("Successfully Send")
          handleCheckout();
        })
    }
  };
  return (
    <main>
      <header className="p-8 grid grid-cols-1 md:grid-cols-2 gap-4 pt-10 lg:px-40 bg-blue-50 dark:bg-blue-900 md:h-96">
        <div className="mx-auto mb-10 md:mt-20">
          <div className="badge bg-red-500 inline-block rounded-xl">
            <p className="font-light text-base px-4 py-1 text-gray-50">
              Happy Diwali
            </p>
          </div>
          <h1 className="text-4xl font-bold mt-4 dark:text-gray-50 text-gray-700">
            Let's Celebrate this Diwali togehter
          </h1>
          <p className="text-sm text-gray-700 mt-4 font-light dark:text-gray-200">
            4th NOV 2023 AT 7:00 PM <br />
            STONE LODGE BOWLS & SOCIAL CLUB
            <br />
            DARTFORD DA2 6PD - FREE PARKING
            <br />
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500"
        >
          <h1 className="text-2xl font-bold dark:text-gray-50">
            Book your Ticket
          </h1>

          <label
            htmlFor="fullname"
            className="text-gray-500 font-light mt-8 dark:text-gray-50"
          >
            Full name<span className="text-red-500 dark:text-gray-50">*</span>
          </label>
          <input
            type="text"
            value={fullname}
            onChange={(e) => {
              setFullname(e.target.value);
            }}
            name="fullname"
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />
          {errors?.fullname && (
            <p className="text-red-500">Fullname cannot be empty.</p>
          )}

          <label
            htmlFor="email"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            E-mail<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />
          {errors?.email && (
            <p className="text-red-500">Email cannot be empty.</p>
          )}

          <label
            htmlFor="subject"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            Contact Number<span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="contact_no"
            value={contactNo}
            onChange={(e) => {
              setContactNo(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />
          {errors?.contactNo && (
            <p className="text-red-500">Contact number cannot be empty.</p>
          )}
          <label
            htmlFor="noAdults"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            Number of Adults
          </label>
          <input
            name="number"
            value={noAdults}
            onChange={(e) => {
              setNoAdults(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          ></input>
          <label
            htmlFor="noAdults2_10"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            Number of Children (2-10)
          </label>
          <input
            name="number"
            value={noChild2_10}
            onChange={(e) => {
              setNoChild2_10(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          ></input>
          <label
            htmlFor="noAdultsAbv10"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            Number of Children (ABV. 10)
          </label>
          <input
            name="number"
            value={noChildAbv10}
            onChange={(e) => {
              setNoChildAbv10(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          ></input>
          <div className="flex flex-row items-center justify-start">
            <button
              type="submit"
              className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
            >
              {buttonText}
            </button>
          </div>
          <div className="text-left">
            {showSuccessMessage && (
              <p className="text-green-500 font-semibold text-sm my-2">
                Thankyou! Your Message has been delivered.
              </p>
            )}
            {showFailureMessage && (
              <p className="text-red-500">
                Oops! Something went wrong, please try again.
              </p>
            )}
          </div>
        </form>
      </header>
      <section className="reach">
        <h1
          className={`text-4xl font-bold text-center md:mt-90 my-10 gradient-text text-gray-700 ${
            errors ? "md:mt-80" : "md:mt-60"
          }`}
        >
          Reach out
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 mx-2 md:grid-cols-2 gap-6 max-w-6xl md:mx-auto my-10">
          <div className="card p-8 shadow rounded-md flex flex-row items-center space-x-4 hover:cursor-pointer hover:shadow-lg transition duration-200">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="text-cyan-500 h-4 w-4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 12C22 10.6868 21.7413 9.38647 21.2388 8.1731C20.7362 6.95996 19.9997 5.85742 19.0711 4.92896C18.1425 4.00024 17.0401 3.26367 15.8268 2.76123C14.6136 2.25854 13.3132 2 12 2V4C13.0506 4 14.0909 4.20703 15.0615 4.60889C16.0321 5.01099 16.914 5.60034 17.6569 6.34326C18.3997 7.08594 18.989 7.96802 19.391 8.93848C19.7931 9.90918 20 10.9495 20 12H22Z"
                fill="currentColor"
              />
              <path
                d="M2 10V5C2 4.44775 2.44772 4 3 4H8C8.55228 4 9 4.44775 9 5V9C9 9.55225 8.55228 10 8 10H6C6 14.4182 9.58173 18 14 18V16C14 15.4478 14.4477 15 15 15H19C19.5523 15 20 15.4478 20 16V21C20 21.5522 19.5523 22 19 22H14C7.37259 22 2 16.6274 2 10Z"
                fill="currentColor"
              />
              <path
                d="M17.5433 9.70386C17.8448 10.4319 18 11.2122 18 12H16.2C16.2 11.4485 16.0914 10.9023 15.8803 10.3928C15.6692 9.88306 15.3599 9.42017 14.9698 9.03027C14.5798 8.64014 14.1169 8.33081 13.6073 8.11963C13.0977 7.90869 12.5515 7.80005 12 7.80005V6C12.7879 6 13.5681 6.15527 14.2961 6.45679C15.024 6.7583 15.6855 7.2002 16.2426 7.75732C16.7998 8.31445 17.2418 8.97583 17.5433 9.70386Z"
                fill="currentColor"
              />
            </svg>
            <p className="text-gray-500 font-light">
              Priya Sharma : 07448290711
            </p>
          </div>
          <div className="card p-8 shadow rounded-md flex flex-row items-center space-x-4 hover:shadow-lg cursor-pointer transition duration-200">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-cyan-500 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z"
                fill="currentColor"
              />
            </svg>
            <p className="text-gray-500 font-light">priya@mywebsite.com</p>
          </div>
        </div>
      </section>
    </main>
  );
}
