import React, { useEffect } from "react";
import Verification from "../components/verification";

import { useSession, getSession } from "next-auth/react";

export default function () {
  useEffect(() => {
    const phoneNumber = sessionStorage.getItem("phoneNumber");
    if (!phoneNumber || phoneNumber === "") {
      router.push("/");
    }
  }, []);

  return <Verification />;
}
export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  console.log("SESSSS IS ", session?.data?.user?.data?.user?.userName);

  if (session) {
    return {
      redirect: {
        destination: "/transaction",
        permanent: false,
      },
    };
  }

  if (session) {
    //check for username
    if (session?.data?.user?.data?.user?.userName) {
      return {
        redirect: {
          destination: "/transaction",
          permanent: false,
        },
      };
    } else {
      return {
        redirect: {
          destination: "/complete-profile",
          permanent: false,
        },
      };
    }
  }
  return {
    props: {
      session: await getSession(context),
    },
  };
};
