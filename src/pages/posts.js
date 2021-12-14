import React, { useState } from 'react';
import Menu from '../components/Menu';
import * as S from '../styles/postsStyle';
import P from 'prop-types';
import Image from 'next/image';
import arrowDown from '../images/arrowdown.png';

export default function Posts({ jsonPosts }) {
  const [page, setPage] = useState(1)
  const Items = ({ data }) => {
    const [openned, setOpenned] = useState(false);
    return (
      <S.WrapperLineTitle key={data.id}>
        <S.LineTitle turnArrow={openned} onClick={() => setOpenned(!openned)}>
          <div id="wrapper">
            <S.Title>{data.title}</S.Title>
            <Image
              id="image"
              alt="arrow"
              layout="fixed"
              width={15}
              height={15}
              src={arrowDown}
            />
          </div>
          {openned && <S.Content>{data.body}</S.Content>}
        </S.LineTitle>
      </S.WrapperLineTitle>
    );
  };
  return (
    <>
      <Menu />
      <S.Wrapper>
        {jsonPosts.data.map((item) => (
          <Items data={item} />
        ))}
      </S.Wrapper>

      <S.Buttons>
        <button>Prev</button>
        <button>Next</button>
      </S.Buttons>
    </>
  );
}

export const getStaticProps = async () => {
  const posts = await fetch(`https://gorest.co.in/public/v1/posts`);
  const jsonPosts = await posts.json();
  return {
    props: {
      jsonPosts,
    },
  };
};

Posts.prototype = {
  jsonPosts: P.object,
};
