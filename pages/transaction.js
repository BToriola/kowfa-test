import React from "react";
import Transaction from "../components/transaction";

import { useSession, getSession } from "next-auth/react";

export default function ({ session }) {
  return <Transaction session={session} />;
}
export const getServerSideProps = async (context) => {
  const user = await getSession(context);
  // console.log('Userr is ', JSON.stringify(user.data.user.data.user.userName))
  const userObj = user && user.data.user.data.user;
  // console.log('KEYSTATE is ', 'userName' in userObj )
  const KEYSTATE = user && "userName" in userObj;
  if (!user && userObj == null) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  if (user && !KEYSTATE) {
    return {
      redirect: {
        destination: "/complete-profile",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session: await getSession(context),
    },
  };
};
