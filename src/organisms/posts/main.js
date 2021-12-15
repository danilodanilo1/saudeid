import React from 'react';
import Menu from '../../components/Menu.js';
import * as S from '../../styles/postsStyle';
import ReactPagination from '../../atoms/reactPagination.js';
import Item from '../../molecules/posts/item.js';

export default function Main({ jsonPosts }) {
  return (
    <S.Content>
      <Menu />
      <S.Wrapper>
        <Item jsonPosts={jsonPosts} />
      </S.Wrapper>
      <ReactPagination data={jsonPosts} />
    </S.Content>
  );
}
