
import axios from "axios";
import {
  getDoctorById,
  getAllDocs,
  getDoctorsBySpecialities,
  getDoctorsByCities,
  getDoctorsFiltered,
  getProfileDoctor,
} from "../Slicer/slicer";

export const getDocbyId = (id) => (dispatch) => {
  axios
    .get(`http://localhost:3004/dummy/doctors/${id}`)
    .then((res) => dispatch(getDoctorById(res.data)))
    .catch((e) => console.log(e));
};

export const getDocs = () => (dispatch) => {
  axios
    .get("http://localhost:3004/dummy/doctors")
    .then((res) => dispatch(getAllDocs(res.data)))
    .catch((e) => console.log(e));
};

export const getDocsBySpecialities = (type) => (dispatch) => {
  try {
    dispatch(getDoctorsBySpecialities(type));
  } catch (e) {}
};

export const getDocsByCities = (type) => (dispatch) => {
  try {
    dispatch(getDoctorsByCities(type));
  } catch (e) {}
};

export const getDocsFiltered = (type) => (dispatch) => {
  try {
    dispatch(getDoctorsFiltered(type));
  } catch (e) {}
};

export const getProfileDoc = () => async (dispatch) => {
  const token = window.localStorage.getItem('auth-token').token
  // console.log(JSON.parse(token), 'el token parseado');
  //const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjMxYTU2MGY5ZjgwOTIwMDQwYmQ2OTZjIiwiaWF0IjoxNjYyNzQ1MDUyfQ.hNxN2i0xnIfFhoPAsSlztfgvJt1P80dtUDKHBtcUlL4'
  try {
    const {data} = await axios.get('http://localhost:3004/profile/doctor', {
      headers: { Authorization: `Bearer ${token}`}
    });
    dispatch(getProfileDoctor(data.data))
    console.log('entro a la accion',data);
  } catch (error) {
    console.log(error)
  }
};



// const { data } = await axios.put(`${RUTA_APP}users/logout`, {}, {
//   headers: { Authorization: `Bearer ${localStorage.getItem('auth-token')}` }
// });

