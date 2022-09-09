
import axios from "axios";
import {
  getDoctorById,
  getAllDocs,
  getDoctorsBySpecialities,
  getDoctorsByCities,
  getDoctorsFiltered,
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

// export const getTokensBySpeciality = async () => (dispatch) =>{



//   try{
//     const{data} = await axios.get("")
//   }
//   catch{

//   }
  

 
// }
