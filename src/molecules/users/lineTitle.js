import React, { useState } from 'react'
import ArrowDown from '../../atoms/arrowDown';
import * as S from '../../styles/userStyle';

export default function LineTitle({data}) {
  const [openned, setOpenned] = useState(false);

  return (
    <S.LineTitle turnArrow={openned} onClick={() => setOpenned(!openned)}>
        <div id="wrapper">
          <S.Title status={data.status}>{data.name}</S.Title>
          <ArrowDown/>
        </div>
        {openned && (
          <S.Drop status={data.status}>
            <S.UserInformation>E-mail: {data.email}</S.UserInformation>
            <S.UserInformation status={data.status}>Gênero: {data.gender === 'female' ? 'Mulher' : 'Homem'}</S.UserInformation>
            <S.UserInformation status={data.status}>Status: <span>{data.status === 'active' ? 'Ativo' : 'Inativo'}</span></S.UserInformation>
          </S.Drop>
        )}
      </S.LineTitle>
  )
}
