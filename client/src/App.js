import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Vistas/Compartido/Componentes/Home";
import DoctorsRoster from "./Vistas/Compartido/Componentes/Main/Listado/Roster";
import DetalleDoctor from "./Vistas/Compartido/Componentes/Main/DetalleDoctor";
import Registro from "./Vistas/Doctor/Componentes/Form";
import Login from "./Vistas/Compartido/Componentes/Login/Login";
import Register from "./Vistas/Compartido/Componentes/Register/Register";


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
        <Route exact path="/Form" element={<Registro />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
