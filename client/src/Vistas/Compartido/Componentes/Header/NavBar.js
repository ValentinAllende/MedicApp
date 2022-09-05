import Logo from "../../imagenes compartidas/Logo Nav.png"
import { Link } from 'react-router-dom';
export default function NavBar (){
    const imagen = Logo



    return (
        <div className="flex  bg-indigo-100 border-solid border-2 border-gray-400 ">
            <img className="object-contain h-18 w-16 mt-5 mb-5 ml-5" src={imagen} alt ='logo'/>
            <Link to ='/form'>
                <p className="bg-[#1479FF]">Registrate</p>
            </Link>
            {/* <div className="flex items-center space-x-10 ">
                Inicio
                Conócenos
                ¿Eres medico?
                Blog
            </div>
          
            <div>
            
                <select>
                    <option>Registrarme</option>
                    <option>Medico</option>
                    <option>Usuario</option>
                    <option>Admin</option>
                </select>
                <button>Iniciar Sesión</button>
            </div> */}
           
        </div>
    )

}