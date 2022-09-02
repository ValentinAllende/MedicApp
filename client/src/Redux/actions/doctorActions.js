import axios from 'axios'
import { getDoctorById } from '../Slicer/slicer'

export const getDocbyId = () => (dispatch) =>{
    axios.get('http://localhost:3004/dummy/doctors/630fffC19A88C8')
    .then(res => dispatch(getDoctorById(res.data)))
    .catch(e => console.log(e))
    console.log('holas');
}
