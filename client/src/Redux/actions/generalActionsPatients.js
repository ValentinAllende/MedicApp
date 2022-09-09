
import axios from "axios";
import {
  getAllPatients,
  getPatientById,
  changeStatus
} from "../Slicer/slicerGeneralPatients";

export const getPatient = (idPatient) => async (dispatch) => {
  try {
    const patientById = await axios.get(`http://localhost:3004/patients/${idPatient}`);
    return dispatch(getPatientById(patientById.data.data));
  } catch (error) {
    console.log(error);
  }
};

export const getPatients = () => async (dispatch) => {
  try {
    const patients = await axios.get("http://localhost:3004/patients");
    return dispatch(getAllPatients(patients.data.data));
  } catch (error) {
    console.log(error);
  }
};

export const changeStatusPatient = (idPatient) => async (dispatch) => {
  try {
    await axios.patch(`http://localhost:3004/patients/status/${idPatient}`);
    return dispatch(changeStatus());
  } catch (error) {
    console.log(error);
  }
};

export const editPatient = (idPatient, data) => async (dispatch) => {
  try {
    await axios.patch(`http://localhost:3004/patients/${idPatient}`, data);
    return;
  } catch (error) {
    console.log(error);
  }
};

export const postPatient = (data) => async (dispatch) => {
  try {
    await axios.post(`http://localhost:3004/patients/`, data);
    return;
  } catch (error) {
    console.log(error);
  }
};

