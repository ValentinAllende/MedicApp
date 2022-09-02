import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDocsBySpecialities , getDocs, } from "../../../../Redux/actions/doctorActions"

export default function SearchBar() {
  const dispatch = useDispatch();
  const [specialities, setSpecialities] = useState("");
  const [cities, setCities] = useState("");
  const doctors = useSelector(state => state.doctores)
  const doctoresFiltrados = useSelector(state => state.filteredDoctors)
  const city = useSelector(state => state.cities)

    
  useEffect(() => {
    dispatch(getDocs())
    
  }, [city]);

  const citySelected = (e) => {
    setCities(e.target.value);
  };

  const specialitiesSearch = (e) => {
    e.preventDefault();
    setSpecialities(e.target.value);
  };

  const handlerSearchButton= () => {
    dispatch(getDocsBySpecialities(specialities))
  
  };

  return (
    <div>
      <label>Encontrá tu especialista y pedí un turno</label>
      <div>
      <input
        placeholder="ej. Odontologia"
        onChange={(e) => {
          specialitiesSearch(e);
        }}
      />

    <label>Ciudad</label>   
      <select
     
        onChange={(e) => {
          citySelected(e);
        }}
      >
        <optgroup label="Ciudad" />

        {city?.map((c) => {
          return <option>{c}</option>;
        })}
      </select>

      <button
        onClick={() => {
          handlerSearchButton();
        }}
      >
        Buscar
      </button>
      </div>
      
    </div>
  );
}
