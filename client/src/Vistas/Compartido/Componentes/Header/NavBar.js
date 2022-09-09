import Logo from "../../imagenes compartidas/Logo Nav.png"
import { Link, useNavigate } from 'react-router-dom';


export default function NavBar ({avaliable}){
    const imagen = Logo
    const navigate = useNavigate()
    const token = window.localStorage.getItem('auth-token')
console.log(token);
    const logOut = ()=>{
        localStorage.clear()
        navigate('/login')

    }

    return (
        <div className=''>
            <div className="flex flex-row  bg-[#E7EFFD] px-10 justify-between">
            <Link to ='/'>
            <img className="object-contain w-16 my-3" src={imagen} alt='logo'/>
            </Link>
            <div className="flex items-center">
            {/* {
                JSON.parse(token) === 'ADMIN' ? 
                <Link to='/'>
                <p className="bg-[#1479FF] font-poppins text-white p-2 rounded">Profile</p>
                </Link>
                :
                JSON.parse(token) === 'DOCTOR' ? 
                <Link to='/'>
                <p className="bg-[#1479FF] font-poppins text-white p-2 rounded">Profile</p>
                </Link> 
                :
                JSON.parse(token) === 'PATIENT' ? 
                <Link to='/'>
                <p className="bg-[#1479FF] font-poppins text-white p-2 rounded">Profile</p>
                </Link> 
                : null
            } */}

            {JSON.parse(token)? (
                
                <button type="button" onClick={logOut} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log Out</button>
                
            ) : <Link to ='/login'>
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