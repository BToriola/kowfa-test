import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { motion } from "framer-motion";

import Layout from "../layout/Layout";
import { signIn, useSession } from "next-auth/react";

const Form = () => {
  const router = useRouter();

  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState("");

  React.useEffect(() => {
    if (router.query.error) {
      setErrorText(router.query.error);
      router.push("/verification", undefined, { shallow: true });
    }
  }, [router]);

  //Phone number formatting
  let phone;
  let formattedPhone;
  if (typeof window !== "undefined") {
    phone = localStorage.getItem("phone");
    formattedPhone = phone.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
  }

  //handle verification
  const handleVerification = async () => {
    setLoading(true);
    signIn("credentials", {
      phoneNumber: phone,
      countryCode: "NG",
      otpCode: code,
      callbackUrl: `/transaction`, //where you want to redirect if successful,
    });
  };

  return (
    <div className=" flex items-center justify-center ">
      <div className="bg-white w-94 p-8 flex items-center rounded-2xl shadow-green-100 shadow-xl justify-center">
        <div initial={{ x: 300, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
          <h1 className="text-2xl text-secondary font-sans mb-2 text-sky-900 tracking-wider  ">
            Enter Verification Code
          </h1>
          <p className="text-xs text-secondary  font-sans font-sm text-sky-900   ">
            Verification code have been sent to <br />
            {formattedPhone}
          </p>

          <form class="w-full max-w-sm">
            <div class="flex items-center border-b border-green-button pt-28">
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none text-center"
                placeholder="xxxxxx"
                aria-label="Verification code"
              />
            </div>
          </form>
          <div>
            {" "}
            <small className="text-red-800 text-center">{errorText}</small>
          </div>
          <div>
            <motion.button
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.1 }}
              transition={{ duration: 1, type: "spring" }}
            >
              <div className="items-center flex justify-center">
                <button
                  type="submit"
                  onClick={handleVerification}
                  className="rounded-lg px-28 md:px-28 mt-16 py-2  bg-green-button hover:bg-green-button active:bg-green-button focus:outline-none focus:ring focus:ring-green-300 text-sky-900 font-body font-bold "
                >
                  LOG IN
                </button>
              </div>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Verification() {
  return (
    <Layout>
      <div className=" grid grid-cols-1  content-center ">
        <div className="xs:grid-cols-1">
          <Form />
        </div>
      </div>
    </Layout>
  );
}
