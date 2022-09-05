import React, { useState } from "react";

export default function Pagination({ badgesPerPage, allBadges, pages }) {
  const pageNumber = [];
  const pageBadgesCount = Math.ceil(allBadges / badgesPerPage);
  for (let i = 1; i <= pageBadgesCount; i++) {
    pageNumber.push(i);
  }

  return (
    <nav className="page-navigation">
      <ul className="pages-list">
        {pageNumber?.map((number) => (
          <li className="inline-block text-center bg-[#1479FF] w-8 p-2 m-2 rounded text-white font-poppins mb-4" key={number}>
            <a href="#!" className="page-link" onClick={() => pages(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
