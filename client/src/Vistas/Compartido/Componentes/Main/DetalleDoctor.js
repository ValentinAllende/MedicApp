import {useParams} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState} from 'react';
import { getClear, getDocbyId, likesDoctor } from '../../../../Redux/actions/doctorActions';
import { HiLocationMarker } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi";
import NavBar from '../Header/NavBar';
import {Link} from 'react-router-dom'
import mapa from '../../imagenes compartidas/mapaLocation.jpeg';
import Mapa from "./mapa";
import axios from 'axios'


function DetalleDoctor (){

  const { idDoctor } = useParams();

  
  const dispatch = useDispatch();
  let doctor = useSelector((state)=> state.doctores.detail.data)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedHour, setSelectedHour] = useState('')
  const [Loading,setLoading] = useState('cargando. . . ')
  let schedule = useSelector((state)=> state.doctores.detail.data?.schedule)

  let hours = schedule?.hour

  let separateHours = hours?.split('-')
  let separateHours1 = doctor && separateHours[0]?.trim()
  let separateHours2 = doctor && separateHours[1]?.trim()

  let separateHours1A = separateHours1?.replace(':00','')
  let separateHours2A = separateHours2?.replace(':00','')

  const enable = useSelector(state => state.doctores.likes)

  let rating = doctor?.rating

  function handleClickDate(e){
    setSelectedDate(e.target.value)
  }

  function handleClickHour(e){
    setSelectedHour(e.target.value)
  }
  

  useEffect(() => {
    dispatch(getDocbyId(idDoctor),
    handleMapa()
    )
  },[dispatch, doctor?.rating, idDoctor, rating]);
  
  useEffect(() => {
    return () => {
      dispatch(getClear())
    }
  },[])
  //variables para setear localStorage
  const address = doctor && doctor.address
  const country = doctor && doctor.country

  //Sets Storage
  localStorage.setItem('hour',selectedHour)
  localStorage.setItem('date',selectedDate)
 
  const  [map,setMap] =  useState({
    lat: '',
    lng: ''
  })
 async function handleMapa(){
    const data = await Mapa(address,country);
    setMap({
      lat: data.filterData,
      lng: data.filterData1
    })
    setLoading('')
  }
  
  const user = JSON.parse(window.localStorage.getItem('User'))
  


  //trae datos de mapa
  console.log('dettalle doctor','latitude: ', map.lat,'Longitude: ', map.lng)

  const rol = JSON.parse(localStorage.getItem('Rol'))
	const [like, setLike] = useState(enable)

	useEffect(() => {
		if(rol === 'PATIENT') dispatch(likesDoctor(idDoctor))
		setLike(enable)
	},[idDoctor, dispatch, rol, enable])


	
	const addFav = async (e) => {
		const data = {
			idDoctor: idDoctor,
			enable: like ? false : true
		}
		const fav = await axios('http://localhost:3004/favorites/add', {
			method: 'POST',
			headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('auth-token'))}` },
			data: data
		})
		console.log(fav.data.data.enable);
		setLike(fav.data.data.enable)
	}

  return(
      <>
      <NavBar/>
      <div className='flex flex-row w-screen justify-evenly flex-wrap min-h-screen bg-[#E7EFFD]'>

        <div>
          <section className='lg:w-[520px] bg-[#f9f9fa]  h-fit mt-10 flex flex-col p-3 rounded-xl items-center shadow-md w-[330px]' >
            <div className=" flex lg:flex-row justify-center lg:w-[500px] lg:ml-7 flex-wrap flex-col">
              <img src={doctor && doctor.image} alt={doctor && doctor.name} className='w-36 h-36 rounded-xl object-cover lg:ml-2 ml-6 mt-5 shadow-md'/>
                <div className='ml-6 mt-3'>
                  <div className="lg:flex">
                  <p className='font-poppins tracking-wide mt-1 text-lg text-[#292F53]'>{doctor && doctor.name}    <span className="invisible"> ...</span></p>
                  {rol === 'PATIENT' ? (
                    <>
                      <div onClick={addFav} className="flex-row  mr-10 w-6 cursor-pointer ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill={!like ? `black` : `red`} className="bi bi-heart-fill" viewBox="0 0 16 16">
                          <path fillrule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                        </svg>
                      </div>
                    </>
						)
							:
								null}

                    </div>

                {doctor && doctor.specialities.map((speciality) => {
                    return(
                        <span key={speciality} className='font-raleway text-[#292f536f] mb-1 '>{speciality} |</span>
                        )
                      })}
                  <div className="font-raleway text-[#292f53b8]"><span className='text-[#1479FF] mt-2 mb-2'>&#9733; </span>{doctor?.rating}</div>
                  <span className='font-raleway w-fit text-[#1479FF] align-middle rounded flex flex-row '> <span className='mt-1'> <HiOutlinePhone/></span> : <span className='text-[#1479FF] tracking-[.10em]'>{doctor?.phoneNumber}</span> </span>
                  <p className='font-poppins text-white mt-2 mb-2 bg-[#1479FF] rounded-lg p-2 w-fit'> Costo de consulta: $ {doctor?.checkUpPrice}</p>

                </div>
            </div>
            <hr className="border-1 lg:w-[400px] w-[250px] my-6"></hr>
              <p className='font-raleway text-[#292f53b8] text-sm mb-2 flex flex-row '> <span className='mr-2'><HiLocationMarker/></span>  {doctor?.city}, <span className='ml-2'>{doctor?.country}</span></p>
              <div class= 'relative flex justify-center rounded-xl'>
                <img src={mapa} className='z-0 w-40 object-cover rounded-xl shadow-lg' alt ='mapa'/>
                  <div class='absolute mt-24 py-4'> 
                  { Loading ?  <a>Loading. . .</a>  : <a class=" z-1 font-poppins text-white bg-[#00C6C2] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center" href={`https://www.google.com/maps/search/?api=1&query=${map.lat},${map.lng}`} target='_blank'>ampliar</a>}
                  </div>
              </div>
          </section>

            <section className='bg-[#f9f9fa] lg:w-[520px] h-fit mt-10 rounded-xl w-[330px] shadow-lg' >
              <h1 className='bg-[#1479FF] font-poppins text-white h-10 align-middle	p-2 rounded-t-xl' >Reseñas</h1>
              <p className='font-raleway text-[#030304b8] text-sm mt-4 mb-2 text-center' >{doctor?.name} Aun no tiene reseñas</p>
              <br></br>
            </section>
        </div>

        <div>
        <section className='bg-[#f9f9fa] lg:w-[520px] h-fit mt-10 rounded-xl mb-2 w-[330px] shadow-lg' >
          <p className='bg-[#1479FF] font-poppins text-white h-10 align-middle	p-2 rounded-t-xl' >Agenda tu cita</p>
          <p className='font-raleway text-[#292f53b8] text-sm mt-2 mb-2 ml-2'> Direccion: {doctor && doctor.address}</p>
          <p className='font-poppins tracking-wide mt-1 mb-2 ml-2'> Selecciona tu fecha:</p>
            <input type="date" id="start" name="trip-start" min="2022-09-09" max="2022-09-23" className="font-raleway ml-2" onClick={e => handleClickDate(e)}/>
          <br></br>

          <p className='font-poppins tracking-wide mt-1 mb-2 ml-2'> Selecciona tu Hora:</p>
            <div>
              {(() => {
                let td = [];
                for (let i = separateHours1A; i <= separateHours2A; i++) {
                  td.push(<button className='font-raleway text-white mt-1 mb-2 focus:bg-[#292F53] rounded bg-[#1479FF] w-28 h-6 m-3' key={i} value={i + ':00'} onClick={e => handleClickHour(e)}>{i + ':00'}</button>);
                }
                return td;
              })()}
            </div>
            {selectedDate.length > 1  ? (
                <p className='font-raleway text-[#292f53b8] text-sm mt-9 mb-2 ml-2'>Tu cita esta agendada para el  <span className='font-poppins tracking-wide mt-1 mb-2  text-center text-[#1479FF] ml-2' >{selectedDate} </span> a las <span className='font-poppins tracking-wide mt-1 mb-2 ml-2 text-[#1479FF]'>{selectedHour} </span></p>
                ):(
                <span></span>
                )}
            {selectedDate.length >1 && selectedHour.length > 1 ? (
                <div className=" flex justify-center   ">
                  <Link to={ user?.rol === 'ADMIN' ? '/admin/doctors' : user?.rol === 'DOCTOR' ? '/doctor/doctors' : user?.rol === 'PATIENT' ? '/patient/buy/doctor/' + idDoctor : "/login"} className='font-poppins text-lg text-white text-center  focus:bg-[#292F53] rounded bg-[#00C6C2] w-40 h-10 m-3 mt-8 pt-1 hover:bg-blue-800'> Reserva tu cita</Link>
                </div>
                ):(
                <span></span>
                  )}
        </section>
        </div>
      </div>
    </>
  )
}


export default DetalleDoctor;