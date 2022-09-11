import {Link} from 'react-router-dom'
import img from '../Assets/logo.png'

export default function IconHome(){
    return(
        <>
            <Link to= '/'>
               <img src={img} alt='Logo' className=" w-20  m-3"/>
            </Link>
        </>
    )
}