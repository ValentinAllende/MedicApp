// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./Vistas/Compartido/Componentes/Home";
// import DetalleDoctor from "./Vistas/Compartido/Componentes/Main/DetalleDoctor";
import SearchBar from "./Vistas/Compartido/Componentes/Header/SearchBar"
import NavBar from "./Vistas/Compartido/Componentes/Header/NavBar"

function App() {
  
  return (
    <>
    <NavBar/>
    <SearchBar/>
    </>
    // <BrowserRouter>
    //   <Routes>
    //     <Route exact path="/" element={ <Home/>} />
    //     <Route exact path="/dummy/doctors/:idDoctor" element={ <DetalleDoctor/>} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
