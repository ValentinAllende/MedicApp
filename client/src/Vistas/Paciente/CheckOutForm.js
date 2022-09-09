import axios from 'axios';
import {useParams} from "react-router-dom";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getDocbyId, getTokensBySpeciality} from "../../Redux/actions/doctorActions"
import swal from 'sweetalert'
import { Link, useNavigate } from 'react-router-dom';






export default function CheckOutForm(props) {
  //----------------------------------------------------
  
  const dispatch = useDispatch();
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()
  const doctor = useSelector((state) => state.doctores.detail.data);
  const {idDoctor} = useParams()
  const [edit, setEdit]= useState()
  const stripe = useStripe();
  const elements = useElements();
  
  //---------------------------------------------------------------------------
  console.log(idDoctor,' id')
  
  useEffect(() => {
    dispatch(getDocbyId(idDoctor))
  }, []);
  
  
  //-----------------------------------------------------
  
  
  
  
  

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
      
    });
    setLoading(true);
    
    
    if (!error) {
  

      const { id } = paymentMethod;
      const dec1 = doctor?.checkUpPrice
      const dec2 = dec1.slice(1)
      const monto = parseFloat(dec2)
      const token = window.localStorage.getItem("auth-token")
      const hour = window.localStorage.getItem("hour")
      const date = window.localStorage.getItem("date")
      const parsed = JSON.parse(token)
      const paymentProcessed = true;
      // const hourParsed = JSON.parse(hour)
      // const dateParsed = JSON.parse(date)
      console.log(parsed,"pago",  date, 'date', hour,'hour')
      try {
        const { data } = await axios ('http://localhost:3004/stripe/checkout ', {
        
          headers: { 'Authorization': `Bearer ${parsed.token}`},
          data:{ amount:monto * 1000, id: id, date: date, hour: hour, idDoctor: idDoctor, paymentProcessed: paymentProcessed},
          method: 'POST',
          

        },
        );



        elements.getElement(CardElement).clear();
        if (data.msg === 'Successful payment') {
        //  dispatch(postOrder({ email: doctor.email, address:edit.address}))
        //  dispatch(clearCart())
       swal("Genial!", "Pago realizado!", "success")
        }
        navigate('/')
      } catch (error) {
        console.log(error)
      }
    } else {
        if(error)
      console.log(error.message,"Error")
    }
    setLoading(false)
  }

   function handleChange(e) {
    setEdit({
      ...edit,
      [e.target.name]: e.target.value,
    });
  }
  console.log('edit',edit)
  

  return (
    <div className="bg-gradient-to-r from-cyan-400 to-blue-800">
    
      <Link to="/" className="flex flex-wrap bg-gradient-to-r from-cyan-800 to-blue-300 text-[40px]  text-purple-50 font-medium "> ← Volver al home</Link>
    <form onSubmit={(e) => handleSubmit(e)} className='card flex flex-wrap justify-center  h-[1000px] '>
      <div className='bg-blue-300 h-[500px] mt-[100px] w-[50%]  text-[40px] text-center p-4 rounded-xl  border-gray-800 border-2 '>
      <div >
        <div >
          <div>
            <label > Usted esta por realizar un pago de la consulta con el Dr/a {doctor?.name}. </label>
           
          </div>
         <label> Precio de la consulta{ doctor?.checkUpPrice}</label>
          <div>
            <label >Address: </label>
            <input
           
              type="text"
              name="address"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>

        <h4 >Total del pago: ${ doctor?.checkUpPrice ? doctor?.checkUpPrice.split("$") : "error"}</h4>
        <img src=""/>
        <CardElement  />
        <button disabled={!stripe} className="text-gray-900 bg-gradient-to-r from-green-200 via-green-300 to-blue-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 border-pink-800 border-2 ">
          {loading ? (
            <div role="status">
            <svg className="inline mr-2 w-8 h-8 text-gray-500 animate-spin dark:text-gray-600 fill-green-800" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Procesando pago...</span>
        </div>
          ) : "Realizar compra."}
        </button>
      </div>
      </div>
    </form>
    </div>
  );
}