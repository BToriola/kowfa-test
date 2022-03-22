import { useRouter } from "next/router";
import Layout from "../layout/Layout";
import React, { useState } from "react";
import { signOut } from "next-auth/react";

const Form = () => {
  const router = useRouter();

  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState("");

  let phone;
  let formattedPhone;
  let pie = "08055756165";

  if (typeof window !== "undefined") {
    phone = localStorage.getItem("phone");
    formattedPhone = phone.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
  }

  return (
    <>
      <div>
        <div initial={{ x: 300, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
          <h1 className="text-2xl text-secondary font-body mb-2 tracking-wider">
            Profile
          </h1>
          <form>
            <div className="flex justify-center mt-8">
              <div className="rounded-lg shadow-xl bg-gray-50 lg:w-1/2">
                <div className="m-4">
                  <div className=" ">
                    <label className="flex flex-col h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                      <div className="flex flex-col items-center justify-center pt-7">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-12 h-12 text-gray-400 group-hover:text-gray-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                          Select a photo
                        </p>
                      </div>
                      <input type="file" class="opacity-0" />
                    </label>
                  </div>
                </div>
                {/* <div class="flex p-2 space-x-4">
            <button class="px-4 py-2 text-white bg-red-500 rounded shadow-xl">Cannel</button>
            <button class="px-4 py-2 text-white bg-green-500 rounded shadow-xl">Create</button>
        </div> */}
              </div>
            </div>

            <form class="w-full max-w-sm mt-8">
              <div class="flex items-center border-b border-green-button py-2">
                <input
                  type="text"
                  //   value={username}
                  //   onChange={(e) => setUsername(e.target.value)}
                  className="appearance-none font-body bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none text-left"
                  placeholder="Enter Username"
                  aria-label="Verification code"
                />
              </div>
              <div class="flex items-center border-b border-green-button py-2">
                <input
                  type="text"
                  //   value={username}
                  //   onChange={(e) => setUsername(e.target.value)}
                  className="appearance-none font-body bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none text-left"
                  placeholder="Enter Username"
                  aria-label="Verification code"
                />
              </div>
              <div class="flex items-center border-b border-green-button py-2">
                <input
                  type="text"
                  //   value={username}
                  //   onChange={(e) => setUsername(e.target.value)}
                  className="appearance-none font-body bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none text-left"
                  placeholder="Enter Username"
                  aria-label="Verification code"
                />
              </div>
            </form>

            <div>
              {" "}
              <small className="text-error text-center">{errorText}</small>
            </div>
          </form>
          <button
            onClick={signOut}
            className="bg-red-700 text-white px-8 py-2 rounded-sm"
          >
            Log Out
          </button>
        </div>
      </div>
    </>
  );
};

export default function Profile({ session }) {
  return (
    <Layout>
      <div className="my-4">
        <Form />
      </div>
    </Layout>
  );
}
