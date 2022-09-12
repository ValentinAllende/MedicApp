import Logo from "../../imagenes compartidas/Logo Nav.png"
import { Link} from 'react-router-dom';
import { LOGOUT_ADMIN, LOGOUT_DOCTOR, LOGOUT_PATIENT } from "../../../../context/config/routes/paths";



export default function NavBar ({avaliable}){

    const imagen = Logo
    const session = window.sessionStorage.getItem('session')
    const user = JSON.parse(window.localStorage.getItem('User'))
    

    return (
        <div className=''>
            <div className="flex flex-row  bg-[#E7EFFD] px-10 justify-between">
            <Link  to = {user?.rol === 'ADMIN' ? '/admin/home' : user?.rol === 'DOCTOR' ? '/doctor/home' : user?.rol === 'PATIENT' ? '/patient/home' : '/'}>
            <img className="object-contain w-16 my-3" src={imagen} alt='logo'/>
            </Link>
            <div className="flex items-center">
            
            {
                user ? 
                <div className="flex flex-col items-end mx-2">
                    <p className="text-xs">{user?.email}</p>
                    <p className="text-xs">Rol: {user?.rol}</p>
                    <Link to={user?.rol === 'ADMIN' ? '/admin' : user?.rol === 'DOCTOR' ? '/doctor' : user?.rol === 'PATIENT' ? '/patient' : null}>
                    <p className="text-xs text-[#1479FF]">Panel</p>
                    </Link>
                </div>
                : null
            }

            {
                JSON.parse(session) ? 
                        user.rol === 'ADMIN' ?
                    <Link to={LOGOUT_ADMIN}><p className="bg-[#1479FF] font-poppins text-white p-2 rounded">Logout</p> </Link>
                    :  user.rol === 'DOCTOR' ?
                    <Link to={LOGOUT_DOCTOR}> <p className="bg-[#1479FF] font-poppins text-white p-2 rounded">Logout</p></Link>
                    :   user.rol === 'PATIENT'?
                    <Link to={LOGOUT_PATIENT}><p className="bg-[#1479FF] font-poppins text-white p-2 rounded">Logout</p> </Link> 
                    : 
                    <Link to ='/login'>
                        <p className="bg-[#1479FF] font-poppins text-white p-2 rounded">Ingresar</p>
                    </Link>
                    : <Link to ='/login'>
                        <p className="bg-[#1479FF] font-poppins text-white p-2 rounded">Ingresar</p>
                    </Link>
            }
            
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