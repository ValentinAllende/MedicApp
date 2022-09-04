import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

export default function Pagination({
  badgesPerPage,
  allBadges,
  pages,
  currentPage,
}) {
  // const [currentPage, setCurrentPage] = useState(1);

  const pageNumbers = [];
  const pageSum = Math.ceil(allBadges / badgesPerPage);

  if (pageSum === 1) return null;
  for (let i = 0; i <= pageSum; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="page-navigation">
      <ul className="pages-list">
        {pageNumbers.includes(currentPage - 1) && (
          <a
            href="#!"
            className="prev-page-link"
            onClick={() => {
              // setCurrentPage(currentPage - 1);
              pages(currentPage - 1);
            }}
          >
            Previous
          </a>
        )}
        {pageNumbers?.map((n) => (
          <li className="page-item" key={n}>
            <a href="#!" className="page-link" onClick={() => pages(n)}>
              {n}
            </a>
          </li>
        ))}
        {pageNumbers.includes(currentPage + 1) && (
          <a
            className="next-page-link"
            href="!#"
            onClick={() => {
              // setCurrentPage(currentPage + 1);
              pages(currentPage + 1);
            }}
          >
            Next
          </a>
        )}
      </ul>
    </nav>
  );
}
