import React from 'react';
import { Items } from '../../organisms/posts/items.js';
import * as S from '../../styles/postsStyle';

export default function Item({ jsonPosts }) {
  return (
    <S.Wrapper>
      {jsonPosts.data.map((item) => (
        <Items data={item} />
      ))}
    </S.Wrapper>
  );
}
