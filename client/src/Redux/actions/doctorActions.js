import axios from 'axios'
import { getDoctorById } from '../Slicer/slicer'

export const getDocbyId = () => async (dispatch) =>{
    await axios.get('http://localhost:3004/dummy/doctors/63114ae4fc13ae2bd6000013')
    .then(res => dispatch(getDoctorById(res.data)))
    .catch(e => console.log(e))
    console.log('holas');
}
