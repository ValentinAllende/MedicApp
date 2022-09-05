import Logo from "../../imagenes compartidas/Logo Nav.png"
import { Link } from 'react-router-dom';
export default function NavBar (){
    const imagen = Logo
    return (
        <div className=''>
            <div className="flex flex-row  bg-[#E7EFFD] px-10 justify-between">
            <Link to ='/'>
            <img className="object-contain w-16 my-3" src={imagen} alt='logo'/>
            </Link>
            <div className="flex items-center">
            <Link to ='/form'>
                <p className="bg-[#1479FF] font-poppins text-white p-2 rounded">Registrate</p>
            </Link>
            </div>
            </div>
           <hr className='border-solid border-1 border-gray-400'></hr>
            
            
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