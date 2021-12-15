import Head from 'next/head';
import Menu from '../components/Menu';
import WelcomeMessage from '../components/WelcomeMessage';

export default function Home() {

  return (
    <>
      <Head>
        <title>Saude-ID</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Menu  />
        <WelcomeMessage/>
      </main>
    </>
  );
}
