import Link from 'next/link'
import React from 'react'
import * as S from '../styles/menuStyle'

export default function Menu(props) {
  console.log(props)
  return (
    <>
      <S.WrapperMenu>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
        <Link href="/users">
          <a>Users</a>
        </Link>
      </S.WrapperMenu>
    </>
  )
}
