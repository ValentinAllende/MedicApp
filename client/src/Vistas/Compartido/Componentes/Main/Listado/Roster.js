import React, { useState, useSyncExternalStore } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import DoctorBadge from "./Badge";
import Pagination from "./Pagination";

export default function DoctorsRoster() {
  // const allSpecialties = useSelector();
  const allBadges = useSelector();
  const [badgesPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastBadge = currentPage * badgesPerPage;
  const indexOfFirstBadge = indexOfLastBadge - badgesPerPage;
  const displayedBadges = allBadges.slice(indexOfFirstBadge, indexOfLastBadge);

  const pages = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main>
      <article>
        {displayedBadges?.map((e) => {
          return (
            <Link to={`/Doctor/${e.id}`}>
              <DoctorBadge
                key={e.id}
                name={e.name}
                specialties={e.specialties.join(", ")}
              />
            </Link>
          );
        })}
      </article>
      <section>
        <Pagination
          badgesPerPage={badgesPerPage}
          allBadges={allBadges.length}
          pages={pages}
          currentPage={currentPage}
        />
      </section>
    </main>
  );
}
