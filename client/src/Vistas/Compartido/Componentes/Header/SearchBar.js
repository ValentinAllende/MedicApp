import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

import {
  getDocsBySpecialities,
  getDocs,
  getDocsByCities,
  getDocsFiltered,
} from "../../../../Redux/actions/doctorActions";

export default function SearchBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [specialities, setSpecialities] = useState("");
  const [cities, setCities] = useState("");
  const doctors = useSelector((state) => state.doctores);
  const doctoresFiltrados = useSelector(
    (state) => state.doctores.filteredDoctors
  );
  const ciudadesFiltradas = useSelector(
    (state) => state.doctores.filteredByCities
  );
  const speciality = useSelector((state) => state.doctores.specialities);
  const city = useSelector((state) => state.doctores.cities);
  const resultadoP = useSelector((state) => state.doctores.newFilter);
  const [error, setError] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    dispatch(getDocs());
  }, []);
  console.log(city, "cities");
  console.log(doctors, "Doctores");
  console.log(ciudadesFiltradas, "ciudad Filtrados");
  console.log(resultadoP, "Resultados finales");

  const citySelected = (e) => {
    setCities(e.target.value);
  };

  const specialitiesSearch = (e) => {
    setSpecialities(e.target.value);
    if (e.target.value === "Especialidad Medica") {
      setSpecialities("");
    } else if (cities.length > 0 && specialities.length > 0) {
      setCities("");
    }
  };

  const handlerSearchButton = () => {
    dispatch(getDocsFiltered({ cities, specialities }));
    dispatch(getDocsBySpecialities(specialities));
    dispatch(getDocsByCities(cities));
    setAnswer(specialities);
    setError("No se ha encontrado un medico especialista en esa ciudad");
    // history.push("/dummy/doctors");
  };

  return (
    <div className="border-width: 2px;">
      <label className="rounded  m-4 pl-2 pr-2 text-sm font-medium text-gray-900   bg-blue-100">
        Encontrá tu especialista y pedí un turno
      </label>
      <div className="flex flex-row">
        <div>
          <form>
            <div className="flex">
              <label
                for="search-dropdown"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
              >
                Your Email
              </label>
              <button
                id="dropdown-button"
                data-dropdown-toggle="dropdown"
                className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-blue-900 dark:hover:bg-blue-500 dark:focus:ring-gray-700 dark:text-gray dark:border-gray-600"
                type="button"
              >
                <select
                  onChange={(e) => {
                    specialitiesSearch(e);
                  }}
                >
                  <option>Especialidad Medica</option>
                  {speciality?.map((c) => {
                    return <option>{c}</option>;
                  })}
                </select>

                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </button>
              <div
                id="dropdown"
                className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                data-popper-reference-hidden=""
                data-popper-escaped=""
                data-popper-placement="top"
                class="position: absolute inset: auto auto 0px 0px+ margin: 0px transform: translate3d(897px, 5637px, 0px)"
              ></div>
              <div className="relative w-full">
                <input
                  placeholder="ej. Odontologia"
                  value={specialities}
                  onChange={(e) => {
                    specialitiesSearch(e);
                  }}
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-700 focus:border-blue-500 dark:bg-blue-0 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <div className="flex">
              <label
                for="search-dropdown"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
              >
                Your Email
              </label>
              <button
                id="dropdown-button"
                data-dropdown-toggle="dropdown"
                className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-blue-900 dark:hover:bg-blue-500 dark:focus:ring-gray-700 dark:text-gray dark:border-gray-600"
                type="button"
              >
                {" "}
                <select
                  onChange={(e) => {
                    citySelected(e);
                  }}
                >
                  <option>Ciudades</option>
                  {city?.map((c) => {
                    return <option>{c}</option>;
                  })}
                </select>
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </button>
              <div
                id="dropdown"
                className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                data-popper-reference-hidden=""
                data-popper-escaped=""
                data-popper-placement="top"
                class="position: absolute inset: auto auto 0px 0px+ margin: 0px transform: translate3d(897px, 5637px, 0px)"
              ></div>
              <div className="relative w-full">
                <input
                  value={cities}
                  onChange={(e) => {
                    citySelected(e);
                  }}
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-blue-0 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:border-blue-500"
                  placeholder="ej. Santa Fe"
                  required
                />
              </div>
            </div>
          </form>
        </div>
        {/* <Link to={"/dummy/doctors"}> */}
        <button
          class="text-sm font-medium text-white bg-blue-900 rounded-r-lg border border-blue-900 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-900 dark:hover:bg-blue-000"
          onClick={() => {
            handlerSearchButton();
            setTimeout(navigate("/dummy/doctors", 1000));
          }}
        >
          Buscar
        </button>
        {/* </Link> */}
      </div>
      <br />
      Especialidad: {answer}
      {resultadoP.length < 1 ? (
        <p>{error}</p>
      ) : (
        resultadoP.map((m) => (
          <p>
            <br />
            {m.name ? m.name : error}
          </p>
        ))
      )}
    </div>
  );
}
