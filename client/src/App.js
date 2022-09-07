import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Vistas/Compartido/Componentes/Home";
import DoctorsRoster from "./Vistas/Compartido/Componentes/Main/Listado/Roster";
import DetalleDoctor from "./Vistas/Compartido/Componentes/Main/DetalleDoctor";
import RegisterDoctor from "./Vistas/Doctor/Componentes/Form";
import RegisterPatient from "./Vistas/Paciente/Componentes/Form/index";
import Login from "./Vistas/Compartido/Componentes/Login/Login";


function App() {
  return (
 
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dummy/doctors" element={<DoctorsRoster />} />
        <Route
          exact
          path="/dummy/doctors/:idDoctor"
          element={<DetalleDoctor />}
        />
        <Route exact path="/registerDoctor" element={<RegisterDoctor />} />
        <Route exact path="/registerPatient" element={<RegisterPatient />} />
        <Route exact path="/login" element={<Login />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
