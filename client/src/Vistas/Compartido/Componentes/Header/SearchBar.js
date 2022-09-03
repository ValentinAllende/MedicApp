import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDocsBySpecialities , getDocs,getDocsByCities, getDocsFiltered} from "../../../../Redux/actions/doctorActions"

export default function SearchBar() {
  const dispatch = useDispatch();
  const [specialities, setSpecialities] = useState("");
  const [cities, setCities] = useState("");
  const doctors = useSelector(state => state.doctores)
  const doctoresFiltrados = useSelector(state => state.filteredDoctors)
  const city = useSelector(state => state.doctores.cities)
  
  
  useEffect(() => {

      dispatch(getDocs())
      dispatch(getDocsByCities(cities))
  
  }, [cities]);
  console.log(city,"cities")
  console.log(doctors,"Doctores")
  console.log(doctoresFiltrados,"Doctores Filtrados")
  
  const citySelected = (e) => {
    setCities(e.target.value);
    
  };

  const specialitiesSearch = (e) => {
    e.preventDefault();
    setSpecialities(e.target.value);
  };

  const handlerSearchButton = () => {
    dispatch(getDocsFiltered({cities,specialities}))
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

 
      <select
     
        onChange={(e) => {
          citySelected(e);
        }}
      >
        
        <option>Ciudades</option>
        {city?.map((c) => {
          return <option key={c}>{c}</option>;
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
