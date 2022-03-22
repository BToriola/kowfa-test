import Head from "next/head";
import NavBar from "./Navbar";

export default function Layout({ children, session }) {
  const userName = session && session?.data?.user?.data?.user?.userName;

  console.log("USERNAME FOUND IS ", userName);

  return (
    <div className=" bg-green-50 ">
      <Head>
        <title>Kowfa Exchange</title>
      </Head>

      <div>
        <NavBar userName={userName} />
      </div>

      <div className="container mx-auto  py-24 min-h-screen bg-green-50">
        {children}
      </div>
    </div>
  );
}
export const getServerSideProps = async (context) => {
  const user = await getSession(context);
  if (!user) {
    return {
      redirect: {
        destination: "/",
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
