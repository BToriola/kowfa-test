import Link from "next/link";
import { Layout } from "../../components/layout";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Okra from "okra-js";

const OkraForm = () => {
  console.log("Testing ");
  Okra.buildWithShortUrl({
    short_url: "TfH0vdKr-", //Your short url from the App builder (https://dash.okra.ng/links)
    onSuccess: function (data) {
      console.log("options success", data);
    },
    onClose: function () {
      console.log("options close");
    },
  });
};

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "NGN",
    label: "₦",
  },
];
const banks = [
  {
    value: "GTB",
    label: "Guaranty Trust Bank",
  },
  {
    value: "EcoBank",
    label: "EcoBank",
  },
  {
    value: "Sterling",
    label: "Sterling Bank",
  },
];

const AddBank = ({ session }) => {
  const [code, setCode] = useState("");
  const [currency, setCurrency] = React.useState("Select Currency");
  const [bank, setBank] = React.useState("Select Bank");

  const handleCurrencies = (event) => {
    setCurrency(event.target.value);
  };
  const handleBank = (event) => {
    setBank(event.target.value);
  };

  return (
    <Layout session={session}>
      {/* <div className="my-4">
        <div className="container">
          <div>
            <div className="h-screen w-full" onClick={() => OkraForm()}>
              <div className="bg-white">
                <h1 className="text-2xl text-sky-900 text-left font-sans mb-2 tracking-wider  ">
                  Add Bank Account(S)
                </h1>
                <p className="text-xs text-sky-900 text-left font-sans">
                  To Be Able To Send And Receive Money <br />
                  Directly In Your Bank Account.
                </p>

                <div>
                  <div className="items-center flex justify-center">
                    <button
                      type="submit"
                      onClick={() => OkraForm()}
                      className="rounded-lg px-28 md:px-28 mt-16 py-2  bg-green-button hover:bg-green-button active:bg-green-button focus:outline-none focus:ring focus:ring-green-300 text-sky-900 font-body font-bold "
                    >
                      Add New Account
                    </button>
                  </div>

                  <Link href="/transaction">
                    <motion.button
                      whileHover={{ scale: 0.9 }}
                      whileTap={{ scale: 1.1 }}
                      transition={{ duration: 1, type: "spring" }}
                    >
                      <div className="items-center flex justify-center">
                        <button
                          type="submit"
                          className="rounded-lg px-28 md:px-28 mt-16 py-2  bg-green-button hover:bg-green-button active:bg-green-button focus:outline-none focus:ring focus:ring-green-300 text-sky-900 font-body font-bold "
                        >
                          CONTINUE
                        </button>
                      </div>
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className=" flex flex-col items-center justify-center ">
        <div className="bg-white p-8  rounded-2xl shadow-green-100 shadow-xl">
          <div initial={{ x: 300, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
            <h1 className="text-2xl text-sky-900 text-left font-body mb-2 tracking-wider ">
              Add Bank Account(S)
            </h1>
            <p className="text-xs text-sky-900 text-left font-body">
              To Be Able To Send And Receive Money <br />
              Directly In Your Bank Account.
            </p>

            <div className="items-center flex justify-center">
              <button
                type="submit"
                onClick={() => OkraForm()}
                className="flex items-center justify-center space-x-6 rounded-lg outline outline-offset-2 outline-1 px-16 md:px-18 mt-16 py-2  focus:outline-none focus:ring focus:ring-green-300 text-sky-900 font-body "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Add New Account</span>
              </button>
            </div>

            <Link href="/transaction">
              <motion.button
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                transition={{ duration: 1, type: "spring" }}
              >
                <div className="items-center flex justify-center">
                  <button
                    type="submit"
                    className="rounded-lg px-28 md:px-28 mt-8 py-2  bg-green-button hover:bg-green-button active:bg-green-button focus:outline-none focus:ring focus:ring-green-300 text-sky-900 font-body font-bold "
                  >
                    CONTINUE
                  </button>
                </div>
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddBank;
