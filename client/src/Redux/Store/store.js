import { configureStore } from "@reduxjs/toolkit";
import doctores from "../Slicer/slicer";

export default configureStore({
  reducer: {
    doctores: doctores
  }
});
