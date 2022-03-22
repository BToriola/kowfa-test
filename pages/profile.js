import React from 'react'
import Profile from '../components/profile'
import { useSession, getSession } from 'next-auth/react';

export default function ({session}) {
  return (
   <Profile session={session}/>
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