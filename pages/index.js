/* ./pages/index.js               */
import Head from "next/head";
import { Layout } from "../components/layout";
import NavBar from "../components/layout/Navbar";

import Image from "next/image";
import { useRouter } from "next/router";

import React, { useState } from "react";

import Lock from "../assets/ios-lock.svg";
import Exchange from "../assets/advert.svg";

import { motion, AnimatePresence } from "framer-motion";

// import 'semantic-ui-css/semantic.min.css'

import countries from "../components/countries";

const Form = () => {
  const router = useRouter();

  const SpinnerAdornment = (props) => (
    <CircularProgress className="text-primary m-4" size={20} />
  );

  // create state variables for each input
  const [phone, setPhone] = useState("");
  const [currency, setCurrency] = useState("");
  const [country, setCountry] = useState("");
  const [errorText, setErrorText] = useState("");
  const [loading, setLoading] = useState(false);

  if (typeof window !== "undefined") {
    // Perform localStorage action
    localStorage.setItem("phone", phone);
  }

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  const handleAuthentication = async (e) => {
    e.preventDefault();
    console.log(phone);
    if (loading === true) return;
    setLoading(true);
    const response = await fetch(
      "https://xchange-ng.herokuapp.com/api/v1/auth/user",
      {
        method: "POST",
        body: JSON.stringify({
          phoneNumber: phone,
          countryCode: currency,
          mode: "phone",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    const message = data.message.replaceAll('"', "");
    setErrorText(message);

    if (message == "OTP  sent") {
      setLoading(false);
      //session storage
      sessionStorage.setItem("phoneNumber", phone);
      router.push("/verification");
    } else if (message !== null) {
      setLoading(false);
    } else {
      return;
    }
  };
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div>
            <div className="bg-white  rounded-2xl  shadow-green-100 shadow-xl p-6 h-[24rem] w-84 md:w-92 lg:w-96 ">
              <h1 className="text-2xl text-sky-900 font-body font-sans mb-28">
                Sign In
              </h1>
              <div className="mt-2 mb-2 relative border-b border-green-button">
                <div className=" absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"></div>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className=" focus:border-green-500 py-2 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                  placeholder="08055756165"
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <label htmlFor="currency" className="sr-only">
                    Currency
                  </label>
                  <select
                    id="currency"
                    name="currency"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className=" focus:border-green-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                  >
                    <option value="US">USD</option>
                    <option value="NG">NGN</option>
                  </select>
                </div>
              </div>
              <div className="items-center flex justify-center py-4">
                {" "}
                <small className="text-red-800 text-center">{errorText}</small>
              </div>

              <div className="items-center flex justify-center">
                <button
                  type="submit"
                  onClick={(e) => handleAuthentication(e)}
                  className="rounded-lg px-28 mt-16 py-2  bg-green-button  hover:bg-green-button active:bg-green-button focus:outline-none focus:ring focus:ring-green-300 text-sky-900 font-body font-bold "
                >
                  LOG IN
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

const ExchangeInfo = () => {
  return (
    <div className="place-self-center">
      <AnimatePresence initial={false}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          <Image src={Exchange} alt="Picture of Exchange" />
        </motion.button>
      </AnimatePresence>
      <div>
        <div className="animate-fade-up ">
          <p className=" font-body font-bold text-4xl text-sky-900 leading-snug py-4">
            Fast & Easy <br />
            Cross Border Exchange
          </p>
        </div>
        <div>
          <p className="text-sky-900" style={{}}>
            Send and receive money directly in your Nigeria <br /> bank account
            from the US
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div class="grid grid-cols-1 md:grid-cols-2  space-y-32  md:space-y-2 gap-8 place-items-center ">
          <div className=" md:justify-self-start md:ml-16">
            {" "}
            <Form />
          </div>
          <div className=" justify-self-center mx-8 md:mx-0 md:justify-self-start">
            <ExchangeInfo />
          </div>
        </div>
      </Layout>
    </div>
  );
}
