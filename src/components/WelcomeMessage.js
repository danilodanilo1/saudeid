import React from 'react';
import Image from 'next/image';
import logo from '../images/saude-id.jpg';
import * as S from '../styles/homeStyle';
export default function WelcomeMessage() {
  return (
      <S.Wrapper>
        <Image src={logo} />
        <h1>Bem vindo ao teste de frontend da empresa SAUDE-ID!</h1>
        <article>
          Para continuar, selecione no menu o que você deseja acessar, a lista
          de usuários, ou a lista de Posts.
        </article>
      </S.Wrapper>
  );
}
