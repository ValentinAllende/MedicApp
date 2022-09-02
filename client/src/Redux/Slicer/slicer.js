import { createSlice } from "@reduxjs/toolkit";


export const doctoresSlice = createSlice({
  name: "doctores",
  initialState:{
    doctores :[],
    detail:{}
  },
  reducers: {
    getDoctorById:(state,action) =>{
      state.detail= action.payload
    }
  },
});

export const { getDoctorById } = doctoresSlice.actions;

export default doctoresSlice.reducer;
