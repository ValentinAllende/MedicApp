import React from "react";

export default function Pagination({ resultsPerPage, totalResults, pages }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalResults / resultsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination-block">
      <ul className="pages-list">
        {pageNumbers?.map((n) => (
          <li className="page-item" key={n}>
            <a href="#!" className="page-link" onClick={() => pages(n)}>
              {n}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
