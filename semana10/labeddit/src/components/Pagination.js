import React from "react";
import styled from "styled-components";

const Pagination = ({ posts, totalPosts, paginate }) => {
  const pageNumbers = []

  for(let i =1; i <= Math.ceil(totalPosts/posts); i++) {
      pageNumbers.push(i)
  }

  return (
    <nav>
      <PageUl className="pagination">
        {pageNumbers.map(number => {
           return <li key={number} onClick={() => paginate(number)}>{number}</li>
        })}
      </PageUl>
    </nav>
  );
};

export default Pagination;

const PageUl= styled.ul`
list-style: none;
display: flex;

li {
    margin: 0 10px;
    cursor: pointer;
}
`