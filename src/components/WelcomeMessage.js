import React from 'react';
import Image from 'next/image';
// import logo from '../images/saudeid.jpg';
import * as S from '../styles/homeStyle';
export default function WelcomeMessage() {
  return (
      <S.Wrapper>
        <Image src={'/images/saudeid.jpg'} width={340} height={240} alt="logo"/>
        <h1>Bem vindo ao teste de frontend da empresa SAUDE-ID!</h1>
        <article>
          Para continuar, selecione no menu o que você deseja acessar, a lista
          de usuários, ou a lista de Posts.
        </article>
      </S.Wrapper>
  );
}
