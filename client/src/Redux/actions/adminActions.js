
import axios from "axios";
import {
  changeSection
} from "../Slicer/slicerAdmin";

export const changeSectionDashboard = (section) => (dispatch) => {
  try {
    return dispatch(changeSection(section));
  } catch (error) {
    console.log(error);
  }
};


