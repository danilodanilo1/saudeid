import Head from 'next/head';
import P from 'prop-types';
import Menu from '../components/Menu';
import WelcomeMessage from '../components/WelcomeMessage';

export default function Home({ jsonPosts, jsonUsers }) {

  return (
    <>
      <Head>
        <title>Saude-ID</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Menu data={{ jsonPosts, jsonUsers }} />
        <WelcomeMessage/>
      </main>
    </>
  );
}

// export const getStaticProps = async () => {
//   const posts = await fetch('https://gorest.co.in/public/v1/posts');
//   const users = await fetch('https://gorest.co.in/public/v1/users');
//   const jsonPosts = await posts.json();
//   const jsonUsers = await users.json();
//   return {
//     props: {
//       jsonPosts,
//       jsonUsers
//     },
//   };
// };

// Home.prototype = {
//   jsonPosts: P.object,
//   jsonUsers: P.object
// };
