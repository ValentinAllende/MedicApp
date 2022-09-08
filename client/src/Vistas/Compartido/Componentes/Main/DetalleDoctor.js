import {useParams} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect/* , useState */} from 'react';
import { getDocbyId } from '../../../../Redux/actions/doctorActions';
//import StarDetail from "./StarDetail";
import { HiLocationMarker } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi";
import NavBar from '../Header/NavBar';


function DetalleDoctor (){

  const { idDoctor } = useParams();
  const dispatch = useDispatch();
  let doctor = useSelector((state)=> state.doctores.detail.data)
  //const [selectedDate, setSelectedDate] = useState('-')
  let schedule = useSelector((state)=> state.doctores.detail.data?.schedule)

  let hours = schedule?.hour
  
  let separateHours = hours?.split('-')
  let separateHours1 = doctor && separateHours[0]?.trim()
  let separateHours2 = doctor && separateHours[1]?.trim()

  let separateHours1A = separateHours1?.replace(':00','')
  let separateHours2A = separateHours2?.replace(':00','')



  console.log(separateHours1A, 'lo que me trae hours');
  console.log(separateHours2A, 'lo que me trae hours2');


  // function handleClick(e){
  //   setSelectedDate(e.target.value)
  // }  
  // function handleDelete(){
  //   window.location.reload(false);
  // }  

  useEffect(() => {
    dispatch(getDocbyId(idDoctor))
  },[dispatch, idDoctor]);

  

  return(
      <>
      <NavBar/>
      <div className='flex flex-row w-screen justify-evenly flex-wrap min-h-screen bg-[#E7EFFD] '>

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

        <div>
        <section className='bg-white w-[550px] h-fit mt-10 rounded-t' >

          <p className='bg-[#1479FF] font-poppins text-white h-10 align-middle	p-2 rounded-t' >Agenda tu cita</p> 

          <p className='font-raleway text-[#292f53b8] text-sm mt-2 mb-2 ml-2'> Direccion: {doctor && doctor.address}</p>

          <p className='font-poppins tracking-wide mt-1 mb-2 ml-2'> Selecciona tu fecha:</p>

          <input type="date" id="start" name="trip-start" min="2022-09-05" max="2022-09-09" className="font-raleway ml-2"/>
          <br></br>

        

          <p className='font-poppins tracking-wide mt-1 mb-2 ml-2'> Selecciona tu Hora:</p>

          <div>
          {(() => {
            let td = [];
            for (let i = separateHours1A; i <= separateHours2A; i++) {
              td.push(<button className='font-raleway text-white mt-1 mb-2 focus:bg-[#292F53] rounded bg-[#1479FF] w-28 h-6 m-3' key={i}>{i + ':00'}</button>);
            }
            return td;
          })()}
          </div>

          <input type="time" id="appt" name="appt"min={separateHours1} max={separateHours2} step='3600' required className=" ml-2  text-raleway rounded out-of-range:bg-red-500 "/>
          <p className='font-raleway text-[#1479FF] text-[10px] -mt-[1px] mb-2 ml-2'>Selecciona la hora completa ej: 8:00 - 12:00 - 13:00 para asi tener la hora de consulta completa</p>
          <p className='font-raleway text-[#292f53b8] text-sm mt-2 mb-2 ml-2'>Recuerda que mi Horario de atencion es de {separateHours1} a {separateHours2}</p>
         
        </section>
        </div>
       
      </div>
      </>
  )
}


export default DetalleDoctor;