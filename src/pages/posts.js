import React from 'react';
import P from 'prop-types';
import Post from '../templates/posts/post'
export default function Posts({ jsonPosts }) {


  return (
    <Post jsonPosts={jsonPosts}/>
  );
}

export const getServerSideProps = async ({ query }) => {
  const page = query.page || 1;
  let userData = null;
  try {
    const posts = await fetch(
      `https://gorest.co.in/public/v1/posts?page=${page}`,
    );
    const jsonPosts = await posts.json();
    return {
      props: {
        jsonPosts,
      },
    };
  } catch (err) {
    userData = { error: { message: err.message } };
  }
};

Posts.prototype = {
  jsonPosts: P.object,
};
