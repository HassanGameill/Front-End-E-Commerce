import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';


import "./pagination.css"

function Pagination() {

  const [pageCount, setPageCount] = useState(0)


  const handlePageClick = (data) => {
    console.log("CLICK",data.selected +1)

  }




  return (
    
    <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={100}
        previousLabel="< previous"
        containerClassName={'pagination justify-content-center p-3'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        nextClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      />

  )
}

export default Pagination
