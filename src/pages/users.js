import React from 'react'
import Menu from '../components/Menu'

export default function Users() {
  return (

    <>
      <Menu/>
      PAGINA DE USERS
    </>
  )
}

// export const getStaticProps = async () => {
//   const users = await fetch('https://gorest.co.in/public/v1/users');
//   const jsonUsers = await users.json();
//   return {
//     props: {
//       jsonPosts,
//       jsonUsers
//     },
//   };
// };

// Home.prototype = {
//   jsonUsers: P.object
// };

