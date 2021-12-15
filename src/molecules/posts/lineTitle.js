import React, { useState } from 'react';
import ArrowDown from '../../atoms/arrowDown';
import * as S from '../../styles/postsStyle';

export default function LineTitle({ data }) {
  const [openned, setOpenned] = useState(false);

  return (
    <S.LineTitle turnArrow={openned} onClick={() => setOpenned(!openned)}>
      <S.LineWrapper turnArrow={openned}>
        <S.Title>{data.title}</S.Title>
        <ArrowDown turnArrow={openned} />
      </S.LineWrapper>
      {openned && <S.Drop>{data.body}</S.Drop>}
    </S.LineTitle>
  );
}
