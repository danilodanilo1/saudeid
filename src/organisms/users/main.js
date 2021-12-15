import React from 'react';
import * as S from '../../styles/userStyle';
import Menu from '../../components/Menu';
import Item from '../../molecules/users/item';
import ReactPagination from '../../atoms/reactPagination';

export default function Main({ jsonUser }) {
  return (
    <S.Content>
      <Menu />
      <S.Wrapper>
        <Item jsonUser={jsonUser} />
      </S.Wrapper>
      <ReactPagination data={jsonUser} />
    </S.Content>
  );
}
