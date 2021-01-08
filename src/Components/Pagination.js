import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';
const range = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
}

function Pagination(props) {
  console.log("pagination")
  const [currentPage, setCurrentPage] = React.useState(props.currPage)
  const [pageLimit,setPageLimit]=React.useState(props.pageLimit)
  const [totalRecords,setTotalRecords]=React.useState(props.totalRecords)
  const [pageNeighbours,setPageNeighbours]=React.useState(props.pageNeighbours)
  const [totalPages,setTotalPages]=React.useState(Math.ceil(totalRecords / pageLimit))
  
   const gotoPage = (page) => {
      
      const currentPage1 = Math.max(0, Math.min(page, totalPages));
      
      const paginationData = {
        currentPage:currentPage1,
        totalPages: totalPages,
        pageLimit: pageLimit,
        totalRecords: totalRecords
      }

      console.log("goto "+JSON.stringify(paginationData))
      setCurrentPage(currentPage1)
      props.onPageChanged(paginationData);
    }

   const handleClick = page => evt => {
      console.log("hadleclick")
      evt.preventDefault();
      gotoPage(page);
    }
  const  handleMoveLeft = evt => {
      evt.preventDefault();
      console.log("handleMoveLeft")
      gotoPage(currentPage - 1);
    }
  const  handleMoveRight = evt => {
      evt.preventDefault();
      console.log("handleMoveRight")
      gotoPage(currentPage + 1);
    }
   const fetchPageNumbers = () => {
      const totalPages1 = totalPages;
      const currentPage1 = currentPage;
      const pageNeighbours1 = pageNeighbours;

      const totalNumbers = (pageNeighbours1 * 2) + 3;
      const totalBlocks = totalNumbers + 2;
  
      if (totalPages1 > totalBlocks) {
        const startPage = Math.max(2, currentPage1 - pageNeighbours1);
        const endPage = Math.min(totalPages1 - 1, currentPage1 + pageNeighbours1);
        let pages = range(startPage, endPage);
        const hasLeftSpill = startPage > 2;
        const hasRightSpill = (totalPages - endPage) > 1;
        const spillOffset = totalNumbers - (pages.length + 1);
  
        switch (true) {
          case (hasLeftSpill && !hasRightSpill): {
            const extraPages = range(startPage - spillOffset, startPage - 1);
            pages = [LEFT_PAGE, ...extraPages, ...pages];
            break;
          }
          case (!hasLeftSpill && hasRightSpill): {
            const extraPages = range(endPage + 1, endPage + spillOffset);
            pages = [...pages, ...extraPages, RIGHT_PAGE];
            break;
          }
          case (hasLeftSpill && hasRightSpill):
          default: {
            pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
            break;
          }
        }
        return [1, ...pages, totalPages1];
      }
      return range(1, totalPages1);
    }
    React.useEffect(() => {
      console.log("useEffect")
      gotoPage(currentPage)
      },[currentPage])
    const pages = fetchPageNumbers();
    
    console.log("pages   "+pages)
      return(
          <Fragment>
            <nav aria-label="Countries Pagination">
              <ul className="pagination">
                
              { pages.map((page, index) => (
                page === LEFT_PAGE && 
                <li key={index} className="page-item">
                  <a className="page-link" href="#" aria-label="Previous" onClick={handleMoveLeft}>
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
      ||
              page === RIGHT_PAGE && 
                <li key={index} className="page-item">
                  <a className="page-link" href="#" aria-label="Next" onClick={handleMoveRight}>
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
                
                 
                 
                 ||  
                   true && <li key={index} className={`page-item${ currentPage === page ? ' active' : ''}`}>
                     <a className="page-link" href="#" onClick={handleClick(page) }>{ page }</a>
                   </li>
              )
   
               ) }
    
              </ul>
            </nav>
          </Fragment>
        )
  }

Pagination.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  pageLimit: PropTypes.number,
  pageNeighbours: PropTypes.number,
  onPageChanged: PropTypes.func
};

export default Pagination;