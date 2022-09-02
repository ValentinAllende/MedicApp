//import {useParams} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDocbyId } from '../../../../Redux/actions/doctorActions';

function DetalleDoctor (){
//const { id } = useParams();
  const dispatch = useDispatch()
  let doctor = useSelector((state)=> state.doctores.detail.data)
  console.log(doctor, 'el doctor del componente');

  useEffect(() => {
    dispatch(getDocbyId())
  },[dispatch]);


  return(
      <>
     {/*  <div>
        {doctor.map((doctors) =>{
        return(
        <h1>{doctors.name}</h1>
        )
        
      })}</div> */}
      <p>fgdshfdhdgd</p>
      </>
  )
}


export default DetalleDoctor;