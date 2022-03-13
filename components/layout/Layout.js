import Head from 'next/head'
import NavBar from './Navbar'




export default function Layout({ children, session }) {
 
    // const userName = session && session?.data?.user?.data?.user?.userName


    


    return (
        <div style={{ height: '100vh'}} className=' flex flex-col h-screen'>
            <Head>
                <title>Kowfa Exchange</title>
                {/* <link
                    rel="preload"
                    href="/fonts/NotoSans/NotoSans-Bold.ttf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/NotoSans/NotoSans-Italic.ttf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/NotoSans/NotoSans-Regular.ttf"
                    as="font"
                    crossOrigin=""
                /> */}
            </Head>
           


             <div>
                <NavBar  />
            </div>


            <div>
                {children}
            </div>
        </div>

    )
}
// export const getServerSideProps = async (context) => {
//     const user = await getSession(context);
//     if (!user) {
//         return {
//             redirect: {
//                 destination: '/',
//                 permanent: false,
//             },
//         };
//     }
//     return {
//         props: {
//             session: await getSession(context),
//         },
//     };
// };
