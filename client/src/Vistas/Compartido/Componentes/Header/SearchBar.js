import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import doctor2 from "../../../../Imagenes compartidas/doctor2.png";
import doctora from "../../../../Imagenes compartidas/doctora.png";
// import { Link } from "react-router-dom";

import {
  getDocsBySpecialities,
  getDocs,
  getDocsByCities,
  getDocsFiltered,
} from "../../../../Redux/actions/doctorActions";
import { useHistory } from "react-router-dom";

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

  const rol = JSON.parse(sessionStorage.getItem('Rol'))

  return (
    <div className="flex items-end justify-center  bg-indigo-100 rounded-md border-spacing-24 border-2 border-indigo-400 ">
      <div>
        <img src={doctora} className="w-[300px] mt-10 mr-[100px]" />
      </div>
      <div className=" flex flex-col border-width: 2px justify-items-center text-center items-center mb-32">
        <label className="text-2xl font-poppins line-height: 1.75rem; rounded  m-4 pl-2 pr-2bg-blue-100 text-blue-800 ">
          <span className=" font-poppins  text-blue-900">
            ENCUENTRA{" "}
          </span>
          <span a className=" font-poppins text-blue-400">
            a tu especialista y
          </span>
          <span className=" font-poppins  text-blue-900">
            {" "}
            AGENDA
          </span>
          <span className=" font-poppins  text-blue-400"> una cita</span>
        </label>
        <div className="flex flex-row">
          <div className="self-stretch ">
            <form>
              <div className="flex">
                <label
                  for="search-dropdown"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
                ></label>
                <button
                  id="dropdown-button"
                  data-dropdown-toggle="dropdown"
                  className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-tl-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-blue-900 dark:hover:bg-blue-500 dark:focus:ring-gray-700 dark:text-gray dark:border-gray-600"
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
                    disabled="true"
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
                className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-bl-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-blue-900 dark:hover:bg-blue-500 dark:focus:ring-gray-700 dark:text-gray dark:border-gray-600"
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
                  disabled="true"
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
            setTimeout(navigate("/doctors", 1000));
          }}
        >
          Buscar
        </button>
        {/* </Link> */}
      </div>
     {/*  Especialidad: {answer}
      {resultadoP.length < 1 ? (
        <p>{error}</p>
      ) : (
        resultadoP.map((m) => (
          <p>
            <br />
            {m.name ? m.name : error}
          </p>
        ))
      )} */}
      </div>
      <div>
        <img src={doctor2} className="w-[300px] mt-10 ml-[100px]" />
      </div>
    </div>
  );
}
