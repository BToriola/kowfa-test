
import React from 'react'
import { useSession, getSession } from 'next-auth/react';
import CompleteProfile from '../components/completeProfile';

export default function ({session}) {
  return (
   <CompleteProfile session={session}/>
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