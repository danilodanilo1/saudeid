import React from 'react';
import Main from '../../organisms/posts/main.js';

export default function Posts({ jsonPosts }) {
  return (
    <Main jsonPosts={jsonPosts}/>
  );
}
