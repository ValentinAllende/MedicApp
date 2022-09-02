import {useEffect, useState} from 'react';

export default function Registro(){
const [input,setInput] = useState({
    name:'',lastName:'', adress:'',phoneNumber:'',license:'',specialities:[] , schedule:[],email:'' , password:'', rpassword:''  
})
const [errors,setErrors] = useState({
    name: 'ingrese un nombre'
});
    function validar(input){
let errors = {};
if(!input.name) errors.name = 'se requiere un nombre'
if(/^[^a-zA-Z]/.test(input.name)) errors.name = "los caracteres especiales no estan permitidos";
if(!input.email) errors.email = 'el email es obligatorio'
if(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(input.email) === false) errors.email = 'email debe ser de la forma: doctor_app@gmail.com'
if(input.rpassword !== input.password) errors.rpassword = 'las contraseñas no coinciden'
if(!input.password) errors.password = 'debe ingresar una contraseña'
if(!input.specialities) errors.specialities = 'se debe ingresar al menos 1 especialidad'
return errors;
}
function handleChange(e){
    setInput({
        ...input,
        [e.target.name] : e.target.value
    })
    setErrors(validar({
      ...input,
      [e.target.name] : e.target.value
  })) }
function handleSubmit(e){
  e.preventDefault();
  dispatch(postDoctor({
    name:'', address:'',phoneNumber:'',license:'',specialities:[] , schedule:[], email:'' , password:'',
  }))
  alert('creado con exito')
  setInput({
    name:'',lastName:'', adress:'',phoneNumber:'',license:'',specialities:[] , schedule:[],email:'' , password:'', rpassword:''
  })
  history.push('/home')
}
// useEffect(() => {
//   dispatch(especialidades())
// })
return(
<form className='bg-gray-800'onSubmit={(e) => handleSubmit(e)}>
  <div className="mb-6">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
    <input type="text" id="name" value={input.name} onChange={(e) => handleChange(e)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required=""/>
    {errors.name ? (<p>{errors.name}</p>) : null}
  </div>
  <div className="mb-6">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Last Name</label>
    <input type="text" id="lastName" value={input.lastName} onChange={(e) => handleChange(e)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required=""/>
    {errors.lastName ? (<p>{errors.lastName}</p>) : null}
  </div>
  <div className="mb-6">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Adress</label>
    <input type="text" id="adress" value={input.adress} onChange={(e) => handleChange(e)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required=""/>
    {errors.adress ? (<p>{errors.adress}</p>) : null}
  </div>
  <div className="mb-6">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Phone Number</label>
    <input type="text" id="phoneNumber" value={input.phoneNumber} onChange={(e) => handleChange(e)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required=""/>
    {errors.phoneNumber ? (<p>{errors.phoneNumber}</p>) : null}
  </div>
  <div className="mb-6">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your License Number</label>
    <input type="text" id="license" value={input.license} onChange={(e) => handleChange(e)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required=""/>
    {errors.license ? (<p>{errors.license}</p>) : null}
  </div>
  <div className="mb-6">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Specialities</label>
    <input type="text" id="specialities"  value={input.specialities} onChange={(e) => handleChange(e)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required=""/>
  </div>
  <div className="mb-6">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
    <input type="email" id="email"  value={input.email} onChange={(e) => handleChange(e)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required=""/>
    {errors.email ? (<p>{errors.email}</p>) : null}
  </div>
  <div className="mb-6">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
    <input type="password" id="password" value={input.password} onChange={(e) => handleChange(e)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required=""/>
    {errors.password ? (<p>{errors.password}</p>) : null}
  </div>
  <div className="mb-6">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Repeat password</label>
    <input type="password" id="repeat-password" value={input.rpassword} onChange={(e) => handleChange(e)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required=""/>
    {errors.rpassword ? (<p>{errors.rpassword}</p>) : null}
  </div>
  <div className="flex items-start mb-6">
    <div className="flex items-center h-5">
      <input id="terms" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required=""/>
    </div>
    <label  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
  </div>
  <button type="submit"  disabled={Object.keys(errors).length === 0 ? false : true} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
</form>
   )
}