import { createSlice } from "@reduxjs/toolkit";


export const doctoresSlice = createSlice({
  name: "doctores",
  initialState:{
    doctores :[],
    filteredDoctors:[],
    detail:{},
    cities: [],
   
  },
  reducers: {
    getAllDocs:(state,action) =>{
      state.doctores = action.payload
      state.filteredDoctors = action.payload
      let ciudades = []
      let ciudadesData =  state.doctores.data.filter(d=>{
        if(d.city){
         return ciudades.push(d?.city)
        }})
        state.cities = ciudades
    },
    getDoctorById:(state,action) =>{
      state.detail = action.payload
    },
    getDoctorsSpecialities:(state,action) =>{
      

       const newFilter = state.doctores.data.filter(d=>{
        if(d.specialities.includes(action.payload)){
         return d
        }})
      
      state.filteredDoctors = newFilter
    },

  },
});

export const { getDoctorById, getAllDocs, getDoctorsSpecialities, getDoctorsCities} = doctoresSlice.actions;

export default doctoresSlice.reducer;
