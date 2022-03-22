import React from 'react'

import { useSession, getSession } from 'next-auth/react';
import AddBank from '../components/addBank';

export default function ({session}) {
  return (
   <AddBank session={session}/>
  )
}
export const getServerSideProps = async (context) => {
  const user = await getSession(context);
  if (!user) {
      return {
          redirect: {
              destination: '/',
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


