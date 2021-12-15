import React from 'react';
import P from 'prop-types';
import Main from '../organisms/users/main';
export default function Posts({ jsonUser }) {
  return (
    <Main jsonUser={jsonUser}/>
  );
}

export const getServerSideProps = async ({ query }) => {
  const page = query.page || 1
  let userData = null
  try {
  const user = await fetch(`https://gorest.co.in/public/v1/users?page=${page}`);
  const jsonUser = await user.json();
  return {
    props: {
      jsonUser,
    },
  };
  } catch (err) {
    userData = { error: { message: err.message } }
  }
};

Posts.prototype = {
  jsonUser: P.object,
};
