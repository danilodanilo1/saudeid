import React from 'react';
import * as S from '../../styles/postsStyle';
import LineTitle from '../../molecules/posts/lineTitle';

export const Items = ({ data }) => {
  return (
    <S.WrapperLineTitle key={data.id}>
      <LineTitle data={data} />
    </S.WrapperLineTitle>
  );
};
