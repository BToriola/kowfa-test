import React, { useState } from "react";
import { useRouter } from "next/router";

import { motion } from "framer-motion";

import { Layout } from "../../components/layout";

const Form = ({ session }) => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  const submitUsername = async (e) => {
    const user = session;
    const USERID = user.data.user.data.user._id;
    const TOKEN = user.data.user.data.token;

    e.preventDefault();
    console.log("User is ", user);
    console.log(username);
    if (loading === true) return;
    setLoading(true);
    const response = await fetch(
      `https://xchange-ng.herokuapp.com/api/v1/user/${USERID}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          userName: username,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );
    const data = await response.json();
    console.log("USER DATA FOUND IS ", data);
    if (data.message == "Success") {
      setLoading(false);
      router.push("/add-bank");
    }

    // const message = data.message.replaceAll('"', '')
    // setErrorText(message)

    // if (message == "OTP  sent") {
    //   setLoading(false)
    //   router.push("/verification")
    // }
    // else if (message !== null) {
    //   setLoading(false)
    // }
    // else {
    //   return
    // }
  };

  return (
    <div className="h-screen w-full">
      <div className=" flex items-center justify-center ">
        <div className="bg-white w-96 p-8 flex items-center rounded-2xl shadow-green-100 shadow-xl justify-center">
          <div initial={{ x: 300, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
            <h1 className="text-2xl font-body mb-2 text-sky-900 tracking-wider  ">
              Choose A Username
            </h1>
            <p className="text-xs text-sky-900 text-left mb-16 font-body   ">
              Username can be used to
              <br /> get paid by anyone.
            </p>

            <form class="w-full max-w-sm mt-8">
              <div class="flex items-center border-b border-green-button py-2">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="appearance-none font-body bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none text-left"
                  placeholder="Enter Username"
                  aria-label="Verification code"
                />
              </div>
            </form>

            <div>
              <motion.button
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                transition={{ duration: 1, type: "spring" }}
              >
                <div className="items-center flex justify-center">
                  <button
                    type="submit"
                    onClick={submitUsername}
                    className="rounded-lg px-20 md:px-28 mt-16 py-2  bg-green-button hover:bg-green-button active:bg-green-button focus:outline-none shadow-green-100 shadow-xl tracking-wider focus:ring focus:ring-green-300 text-sky-900 font-body font-bold "
                  >
                    NEXT
                  </button>
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function CompleteProfile({ session }) {
  return (
    <Layout session={session}>
      <div>
        <Form session={session} />
      </div>
    </Layout>
  );
}
