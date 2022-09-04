import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Vistas/Compartido/Componentes/Home";
import DetalleDoctor from "./Vistas/Compartido/Componentes/Main/DetalleDoctor";


function App() {
  
  return (
 
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Home/>} />
        <Route exact path="/dummy/doctors/:idDoctor" element={ <DetalleDoctor/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
