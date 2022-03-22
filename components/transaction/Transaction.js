import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import React, { useState } from "react";
import TransactionCard from "./transactionCard";

// import { SessionProvider, useSession, signIn } from 'next-auth/react';
import { useRouter } from "next/router";
import { transacts, Currencies } from "./constant";
import Layout from "../layout/Layout";

export default function Transaction({ session }) {
  const router = useRouter();
  // const [currency, setCurrency] = React.useState('Select Currency');
  const [bank, setBank] = React.useState("Select Bank");
  const [loading, setLoading] = React.useState(false);
  // const { userData, status } = useAuth()
  // console.log('USESESSION IS ', useSession())
  const [value, setValue] = React.useState();
  const handleChange = (e, { value }) => {
    setValue((prevState) => ({ ...prevState, value }));
  };
  const handleBank = (event) => {
    setBank(event.target.value);
  };

  const initiatePayment = async (e) => {
    if (loading === true) return;
    setLoading(true);
    console.log("TEST");
    const response = await fetch(
      "https://docs.okra.ng/reference/initiatepayment",
      {
        method: "POST",
        body: JSON.stringify({
          account_to_debit: "account",
          account_to_credit: "kowfa_account",
          currency: "NGN",
          amount: "5000",
        }),
        headers: {
          "Content-Type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjBjZDM4NGRjM2I3ZjAwNDE1ZWVlN2MiLCJpYXQiOjE2NDUwMDc3NDh9.IQYgf40-L8bRx10DAAH3nVeoFr4-3gCt90uBwyJ75kI",
        },
      }
    );
    const data = await response.json();
    console.log("Data gotten from the payment link is ", data);
  };

  return (
    <>
      <Layout session={session}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className=" grid grid-cols-1 gap-4 self-center">
            <div className="flex bg-green-50 w-72 rounded-xl shadow-lg shadow-green-200 items-center justify-center justify-self-center self-center h-72">
              {TransactionCard(287, 287, 2, 380.5, "dollarnaira.png")}
            </div>
            <div className="bg-green-50 w-72 flex items-center justify-center justify-self-center rounded-xl shadow-2xl shadow-green-200  h-72">
              {TransactionCard(287, 287, 2, 0.0026, "nairadollar.png")}
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center">
            <h3 className="font-body text-2xl mt-6 md:-mt-14 text-sky-900 self-start ml-10 tracking-wider">
              New Transaction
            </h3>
            <div className="w-5/6 rounded-lg p-6  bg-white">
              <div className="text-sm mb-2">
                <p className="font-body text-sky-900 tracking-wide">
                  YOU ARE SENDING{" "}
                </p>
              </div>
              <div className="py-2 ">
                {" "}
                <div className=" mb-6 md:mb-0">
                  <input
                    class="appearance-none block w-full bg-green-50 text-gray-700  rounded-lg py-6 px-4 leading-tight outline-none focus:outline-none focus:bg-white focus:border-white placeholder-sky-900"
                    id="grid-zip"
                    type="text"
                    placeholder="$5,000"
                  />
                </div>
              </div>
            </div>
            <div className="w-5/6 rounded-lg p-6   bg-green-50 border-solid border-4  border-white">
              <div className="text-sm mb-2">
                <p className="font-body text-sky-900 tracking-wide">
                  RECIPIENT GETS
                </p>
              </div>
              <div className="py-2 ">
                {" "}
                <div className=" mb-6 md:mb-0">
                  <div
                    className=" bg-green-100  rounded-lg py-6 px-4  placeholder-sky-900 leading-tight focus:outline-none focus:bg-white focus:border-white"
                    id="grid-zip"
                  >
                    <p className="font-body">₦1,901,250.00</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <motion.button
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                transition={{ duration: 1, type: "spring" }}
              >
                <button
                  type="submit"
                  onClick={() => initiatePayment()}
                  className="rounded-lg px-[9rem] md:px-[11.8rem] mt-4 py-6  bg-sky-900 hover:bg-sky-800 active:bg-green-button focus:outline-none focus:ring focus:ring-green-300 text-green-button font-body font-bold "
                >
                  SEND
                </button>
              </motion.button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div>
              <h3 className="font-body text-2xl mt-6 md:-mt-8 text-sky-900 tracking-wider">
                Recent Transactions
              </h3>

              {transacts.map((transact) => (
                <div key={transact.id} className="w-full">
                  <div className="flex items-center justify-center gap-8 h-12 my-2 ">
                    <Image
                      src={require(`../../assets/profileimage2.jpeg`)}
                      alt="profileImage"
                      width={40}
                      height={40}
                      className="rounded-lg"
                    />
                    <p className="font-body text-sky-900">
                      {transact.name}
                      <span className="grid text-xs text-gray-400 ">
                        {transact.date}
                      </span>
                    </p>
                    <p className="font-body text-blue-700">{transact.amount}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
