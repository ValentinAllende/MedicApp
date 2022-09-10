
import axios from "axios";
import {
  changeSection,
  getAllAdmins,
  getAdminById,
  changeStatus
} from "../Slicer/slicerGeneralAdmins";

export const changeSectionDashboard = (section) => (dispatch) => {
  try {
    return dispatch(changeSection(section));
  } catch (error) {
    console.log(error);
  }
};

export const getAdmin = (idAdmin) => async (dispatch) => {
  try {
    if(!idAdmin){
      return dispatch(getAdminById({}));
    }
    const adminById = await axios.get(`http://localhost:3004/admins/${idAdmin}`);
    return dispatch(getAdminById(adminById.data.data));
  } catch (error) {
    console.log(error);
  }
};

export const getAdmins = () => async (dispatch) => {
  try {
    const admins = await axios.get("http://localhost:3004/admins");
    return dispatch(getAllAdmins(admins.data.data));
  } catch (error) {
    console.log(error);
  }
};

export const changeStatusAdmin = (idAdmin, enable) => async (dispatch) => {
  try {
    await axios.patch(`http://localhost:3004/admins/${idAdmin}`, {enable: enable});
    return dispatch(changeStatus());
  } catch (error) {
    console.log(error);
  }
}; 

/* export const editPatient = (idAdmin, data) => async (dispatch) => {
  try {
    await axios.patch(`http://localhost:3004/admins/${idAdmin}`, data);
    return;
  } catch (error) {
    console.log(error);
  }
}; */

export const postAdmin = (data) => async (dispatch) => {
  try {
    await axios.post(`http://localhost:3004/admins/`, data);
    return;
  } catch (error) {
    console.log(error);
  }
};
