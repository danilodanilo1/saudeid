import React, { useEffect, useMemo, useState } from 'react';
import Menu from '../components/Menu';
import * as S from '../styles/postsStyle';
import P from 'prop-types';
import Image from 'next/image';
import arrowDown from '../images/arrowdown.png';
import { useRouter } from 'next/router';
import ReactPaginate from 'react-paginate';
export default function Posts({ jsonPosts }) {
  const [research, setResearch] = useState('');
  const [data, setData] = useState('');
  const router = useRouter();

  useEffect(()=> {
    setData(jsonPosts)
  },[jsonPosts])

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
          {openned && <S.Drop>{data.body}</S.Drop>}
        </S.LineTitle>
      </S.WrapperLineTitle>
    );
  };

  const handlePagination = (page) => {
    const path = router.pathname;
    const query = router.query;
    query.page = page.selected + 1;
    router.push({
      pathname: path,
      query: query,
    });
  };

  return (
    <S.Content>
      <Menu />
      <S.Wrapper>
        {data?.data?.map((item, i) => (
          <Items key={i} data={item} />
        ))}
      </S.Wrapper>
      <ReactPaginate
        marginPagesDisplayed={1}
        pageRangeDisplayed={5}
        previousLabel={'prev'}
        nextLabel={'next'}
        breakLabel={'...'}
        initialPage={jsonPosts.meta.pagination.page - 1}
        pageCount={jsonPosts.meta.pagination.pages}
        onPageChange={handlePagination}
        containerClassName={'paginate-wrap'}
        subContainerClassName={'paginate-inner'}
        pageClassName={'paginate-li'}
        pageLinkClassName={'paginate-a'}
        activeClassName={'paginate-active'}
        nextLinkClassName={'paginate-next-a'}
        previousLinkClassName={'paginate-prev-a'}
        breakLinkClassName={'paginate-break-a'}
      />
    </S.Content>
  );
}

export const getServerSideProps = async ({ query }) => {
  const page = query.page || 1;
  let userData = null;
  try {
    const posts = await fetch(
      `https://gorest.co.in/public/v1/posts?page=${page}`,
    );
    const jsonPosts = await posts.json();
    return {
      props: {
        jsonPosts,
      },
    };
  } catch (err) {
    userData = { error: { message: err.message } };
  }
};

Posts.prototype = {
  jsonPosts: P.object,
};
