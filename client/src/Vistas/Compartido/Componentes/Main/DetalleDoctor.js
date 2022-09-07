import {useParams} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect} from 'react';
import { getDocbyId } from '../../../../Redux/actions/doctorActions';
//import StarDetail from "./StarDetail";
import { HiLocationMarker } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi";
import Stripe from '../../../Paciente/StripeCheckOut'
import NavBar from '../Header/NavBar';
import {Link} from 'react-router-dom'

function DetalleDoctor (){
const { idDoctor } = useParams();
  console.log(useParams());
  const dispatch = useDispatch()
  let doctor = useSelector((state)=> state.doctores.detail.data)
  //let rating = parseInt(doctor?.rating)

  useEffect(() => {
    dispatch(getDocbyId(idDoctor))
  },[dispatch, idDoctor]);
 console.log(doctor,"Doctor")
/*   console.log(doctor, 'el doctor del componente');
  console.log( rating, 'el rating');
  console.log(4, 'el numero 4'); */





  return(
      <>
      <NavBar/>
      <div className='flex flex-row w-screen justify-evenly flex-wrap h-screen bg-[#E7EFFD] '>

        <div>
          <section className='bg-white w-[550px] h-fit mt-10 flex flex-row p-3 rounded items-center' >
            <img src={doctor && doctor.image} alt={doctor && doctor.name} className='w-40 h-40 rounded-full object-cover border-solid border-2 border-[#1479FF] '/>
            <div className='ml-4'>
            <p className='font-poppins tracking-wide mt-1 mb-2 '>{doctor && doctor.name}</p>
            <p className='font-raleway text-[#292f536f] -mt-2 mb-2  text-xs'>Licencia: {doctor?.license}</p>
              {doctor && doctor.specialities.map((speciality) => {
                return(
                  <span key={speciality} className='font-raleway text-[#292f536f] mt-1 mb-2 '>{speciality} | </span>
                )
              })}
            <p className='font-raleway text-[#292f53b8] text-sm mt-2 mb-2 flex flex-row '> <span className='mr-2'><HiLocationMarker/></span>  {doctor?.city}, <span className='ml-2'>{doctor?.country}</span></p>
            <p className='font-raleway text-[#292f536f] mt-2 mb-2 '> Precio consulta: {doctor?.checkUpPrice}</p>
            
              <Link to={ "/dummy/doctors/" + idDoctor + "/stripe"}>
       
              Pagar consulta.
           
            </Link>
            
            <span className='font-raleway w-fit text-[#1479FF] align-middle rounded flex flex-row '> <span className='mt-1'><HiOutlinePhone/></span>: <span className='text-[#1479FF] tracking-[.10em]'>{doctor?.phoneNumber}</span> </span>
            
            {/* <div className='text-[#1479FF] mt-4 mb-2 '> 
              {<StarDetail
              stars={doctor && rating}/>} 
            </div>
            */}
            </div>
            
          </section>
          {/* <section className='bg-white w-[550px] h-fit mt-10 rounded-t' >
          <h1 className='bg-[#1479FF] font-poppins text-white h-10 align-middle	p-2 rounded-t' >Reseñas</h1> 
            <p className='font-raleway text-[#292f53b8] text-sm mt-4 mb-2 text-center' >{doctor?.name} Aun no tiene reseñas</p>
            <br></br>
          </section> */}
        </div>

        {/* <div>
        <section className='bg-white w-[550px] h-fit mt-10 rounded-t' >
          <p className='bg-[#1479FF] font-poppins text-white h-10 align-middle	p-2 rounded-t' >Agenda tu cita</p> 
          <p className='font-raleway text-[#292f53b8] text-sm mt-2 mb-2 ml-2'> Direccion: {doctor && doctor.address}</p>
          <p className='font-raleway text-[#292f53b8] text-sm mt-2 mb-2 ml-2'>aca va el calendario para agendamiento de citas</p>
        
        </section>
        </div> */}
       
      </div>
      </>
  )
}


export default DetalleDoctor;