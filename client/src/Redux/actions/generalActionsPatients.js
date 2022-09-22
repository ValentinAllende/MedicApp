
import axios from "axios";
// import { getfavoritos } from "../Slicer/slicer";
import {
  getAllPatients,
  getPatientById,
  changeStatus,
  getPatientsByDates,
  getPatientProfile,
  getfavoritos,
  clear
  
} from "../Slicer/slicerGeneralPatients";

export const getPatient = (idPatient) => async (dispatch) => {
  try {
    if(!idPatient){
      return dispatch(getPatientById({}));
    }
    const patientById = await axios.get(`/patients/${idPatient}`);
    return dispatch(getPatientById(patientById.data.data));
  } catch (error) {
    console.log(error);
  }
};

export const getPatients = () => async (dispatch) => {
  try {
    const patients = await axios.get("/patients");
    return dispatch(getAllPatients(patients.data.data));
  } catch (error) {
    console.log(error);
  }
};

export const getPatientsBetweenDates = (startDate, finishDate) => async (dispatch) => {
  try {
    const patients = await axios.get(`/patients/data/queries/?startDate=${startDate}&finishDate=${finishDate}`);
    return dispatch(getPatientsByDates(patients.data));
  } catch (error) {
    console.log(error);
  }
};

export const changeStatusPatient = (idPatient) => async (dispatch) => {
  try {
    await axios.patch(`/patients/status/${idPatient}`);
    return dispatch(changeStatus());
  } catch (error) {
    console.log(error);
  }
};

export const editPatient = (idPatient, data) => async (dispatch) => {
  try {
    await axios.patch(`/patients/${idPatient}`, data);
    return;
  } catch (error) {
    console.log(error);
  }
};

export const postPatient = (data) => async (dispatch) => {
  try {
    await axios.post(`/patients/`, data);
    return;
  } catch (error) {
    console.log(error);
  }
};


export const getPatientToken = () => async (dispatch) => {
  try {
    const patientById = await axios('/patients/profile',{
      headers: { Authorization : `Bearer ${JSON.parse(window.localStorage.getItem('auth-token'))}`}
    });
    console.log(patientById.data);
    return dispatch(getPatientProfile(patientById.data));
  } catch (error) {
    console.log(error);
  }
};

export const getPatientFavorites = () => async (dispatch) => {
  try {
    const {data} = await axios('http://localhost:3004/favorites/likes',{
      headers: { Authorization : `Bearer ${JSON.parse(window.localStorage.getItem('auth-token'))}`}
    });
    console.log(data.data);
    return dispatch(getfavoritos(data.data));
  } catch (error) {
    console.log(error);
  }
};

export const clearFav = ()=> async (dispatch) => {
  try {
    dispatch(clear())
  } catch (error) {
    console.log(error);
  }
}

