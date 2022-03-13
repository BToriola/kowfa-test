/* ./pages/index.js               */
import Head from 'next/head';
import { Layout } from '../components/layout';
import NavBar from '../components/layout/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <div className='mb-8 bg-blue-500'>

          Hello World</div>
      </Layout>

    </div>

  );
}
