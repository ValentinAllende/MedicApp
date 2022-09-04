import axios from "axios";
import {
  getDoctorById,
  getAllDocs,
  getDoctorsBySpecialities,
  getDoctorsByCities,
  getDoctorsFiltered,
} from "../Slicer/slicer";

export const getDocbyId = () => (dispatch) => {
  axios
    .get("http://localhost:3004/dummy/doctors/630fffC19A88C8")
    .then((res) => dispatch(getDoctorById(res.data)))
    .catch((e) => console.log(e));
  console.log("holas");
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
