import { configureStore } from "@reduxjs/toolkit";
import doctores from "../Slicer/slicer";
import generalPatients from "../Slicer/slicerGeneralPatients";
import generalDoctors from "../Slicer/slicerGeneralDoctors";
import admins from "../Slicer/slicerAdmin";

export default configureStore({
  reducer: {
    doctores: doctores,
    generalPatients: generalPatients,
    generalDoctors: generalDoctors,
    admins: admins
  }
});
