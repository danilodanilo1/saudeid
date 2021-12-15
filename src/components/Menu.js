import Image from 'next/image';
import React from 'react';
import * as S from '../styles/menuStyle';
// import logo from '../images/saudeid.jpg';
import Link from 'next/link';
export default function Menu(props) {
  console.log(props);
  return (
    <>
      <S.WrapperMenu>
        <Link href="/">
            <Image src={'/images/saudeid.jpg'} height={80} width={120} alt="logo" id="logo"/>
        </Link>
        <S.Links>
          <Link href="/posts">
            <a>Posts</a>
          </Link>
          <Link href="/users">
            <a>Users</a>
          </Link>
        </S.Links>
      </S.WrapperMenu>
    </>
  );
}
