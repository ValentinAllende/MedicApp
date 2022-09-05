import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavBar from "../../Header/NavBar";
import { getDocsFiltered } from "../../../../../Redux/actions/doctorActions";
import DoctorBadge from "./Badge";
import Pagination from "./Pagination";

export default function DoctorsRoster() {
  const dispatch = useDispatch();
  const allBadges = useSelector((state) => state.doctores.newFilter);
  const [badgesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastBadge = currentPage * badgesPerPage;
  const indexOfFirstBadge = indexOfLastBadge - badgesPerPage;
  const displayedBadges = allBadges.slice(indexOfFirstBadge, indexOfLastBadge);

  const pages = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getDocsFiltered());
  }, []);

  

  return (
    <main className=' h-screen w-screen bg-[#E7EFFD]'>
      <NavBar/>
      <article>
        {displayedBadges.map((e) => {
          return (
            <Link to={`/dummy/doctors/${e.id}`}>
              <DoctorBadge
                key={e.id}
                name={e.name}
                specialties={e.specialities.join(", ")}
                image= {e.image}
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
        />
      </section>
    </main>
  );
}
