import React, { useState } from 'react'
import ArrowDown from '../../atoms/arrowDown';
import LineTitle from '../../molecules/users/lineTitle';
import * as S from '../../styles/userStyle';

export const Items = ({ data }) => {
  return (
    <S.WrapperLineTitle key={data.id}>
      <LineTitle data={data}/>
    </S.WrapperLineTitle>
  );
};
