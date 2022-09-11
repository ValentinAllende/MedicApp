
import axios from "axios";
import {
  getAllAppointments,
  getAppointmentById,
} from "../Slicer/slicerGeneralAppointments";

export const getAppointment = (idAppointment) => async (dispatch) => {
  try {
    if(!idAppointment){
      return dispatch(getAppointmentById({}));
    }
    const appointmentById = await axios.get(`/appointments/${idAppointment}`);
    return dispatch(getAppointmentById(appointmentById.data.data));
  } catch (error) {
    console.log(error);
  }
};

export const getAppointments = () => async (dispatch) => {
  try {
    const appointments = await axios.get("/appointments");
    return dispatch(getAllAppointments(appointments.data.data));
  } catch (error) {
    console.log(error);
  }
};




