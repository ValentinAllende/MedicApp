export default function Banner(){
return(
    <div className='flex justify-center text-white'>
        <div className='px-2 py-10 text-center bg-blue-500 text-medium flex-center w-1/3'>
        <h2>Logo</h2>
        <h2 className='font-bold'>Encuentra tu Especialista</h2>
        <h4 className=''>Las opiniones reales de miles de pacientes te ayudarán a tomar siempre la mejor decisión.</h4>
        </div>
        <div className='px-2 py-10 text-center text-medium  bg-slate-900 flex-center w-1/3'>
        <h2>Logo</h2>
        <h2 className='font-bold'>Pide cita de forma fácil</h2>
        <h4 className=' '>Elige la hora que prefieras y pide cita sin necesidad de llamar. Es fácil y muy cómodo.</h4>
        </div>
        <div className='px-2 py-10 text-center bg-blue-500 text-medium flex-center w-1/3'>
        <h2>Logo</h2>
        <h2 className='font-bold' >Sin costes añadidos</h2>
        <h4 className=''>La reserva de cita es un servicio gratuito de Doctor App.</h4>
        </div>
    </div>
)
}
