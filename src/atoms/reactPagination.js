import React from 'react'
import { useRouter } from 'next/router';
import ReactPaginate from 'react-paginate';


export default function ReactPagination(props) {
  const router = useRouter();

  const handlePagination = (page) => {
    const path = router?.pathname;
    const query = router?.query;
    query.page = page.selected + 1;
    router.push({
      pathname: path,
      query: query,
    });
  };
  return (
    <ReactPaginate
    marginPagesDisplayed={1}
    pageRangeDisplayed={5}
    previousLabel={'prev'}
    nextLabel={'next'}
    breakLabel={'...'}
    initialPage={props.data?.meta.pagination.page - 1}
    pageCount={props.data?.meta.pagination.pages}
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
  )
}
