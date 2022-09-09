import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckOutForm from "./Vistas/Paciente/CheckOutForm";
import Home from "./Vistas/Compartido/Componentes/Home";
import DoctorsRoster from "./Vistas/Compartido/Componentes/Main/Listado/Roster";
import DetalleDoctor from "./Vistas/Compartido/Componentes/Main/DetalleDoctor";
import Registro from "./Vistas/Doctor/Componentes/Form";
import Stripe from "./Vistas/Paciente/StripeCheckOut"
import RegisterDoctor from "./Vistas/Doctor/Componentes/Form";
import RegisterPatient from "./Vistas/Paciente/Componentes/Form/index";
import Login from "./Vistas/Compartido/Componentes/Login/Login";
import PanelDoctor from "./Vistas/Doctor/Componentes";
import Dashboard from "./Vistas/Admin/componentes/Dashboard/Dashboard";


function App() {
  return (
 
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} /> 
        <Route exact path="/dummy/doctors" element={<DoctorsRoster />} />
        <Route exact path="dummy/doctors/:idDoctor/stripe" element={<Stripe />}/>
        <Route
          exact
          path="/dummy/doctors/:idDoctor"
          element={<DetalleDoctor />}
        />
        <Route exact path="/registerDoctor" element={<RegisterDoctor />} />
        <Route exact path="/registerPatient" element={<RegisterPatient />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/doctor/dashboard" element={<PanelDoctor />} />

        <Route path="/admin/dashboard" element={<Dashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
