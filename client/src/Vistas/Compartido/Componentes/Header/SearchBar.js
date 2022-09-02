import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [specialities, setSpecialities] = useState("");
  const [cities, setCities] = useState("");


  const city = ["cordoba","BsAs","Bogota","Lima","CDMX"]

  useEffect(() => {
  
  }, []);

  const citySelected = (e) => {
    setCities(e.target.value);
  };

  const specialitiesSearch = (e) => {
    e.preventDefault();
    setSpecialities(e.target.value);
  };

  const handlerSearchButtonClick = () => {
    // dispatch(function(specialities, cities))
  
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
        <optgroup label="Ciudad" />

        {city?.map((c) => {
          return <option>{c}</option>;
        })}
      </select>

      <button
        onClick={() => {
          handlerSearchButtonClick();
        }}
      >
        Buscar
      </button>
      </div>
      
    </div>
  );
}
