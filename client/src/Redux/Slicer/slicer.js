import { createSlice } from "@reduxjs/toolkit";


export const doctoresSlice = createSlice({
  name: "doctores",
  initialState:{
    doctores :[],
    filteredDoctors:[],
    detail:{},
    cities:[],
    filteredByCities:[],
    newFilter:[]
   
  },
  reducers: {
    getAllDocs:(state,action) =>{
      state.doctores = action.payload

      let ciudades = []
      let ciudadesData =  state.doctores.data.filter(d=>{
        if(d.city){
         return ciudades.push(d.city)
        }})
        console.log("Ciudades",ciudades)
        state.cities = ciudades
    },
    getDoctorById:(state,action) =>{
      state.detail = action.payload
    },
    getDoctorsBySpecialities:(state,action) =>{
      console.log(action.payload , "specialities en slider")
       const filteredStates = state.filteredByCities ? state.filteredByCities : state.doctores
       const newFilter =  filteredStates.data.filter(d=>{
        if(d.specialities.includes(action.payload)){
         return d
        }})
      
      state.filteredDoctors = newFilter
      
    },
    getDoctorsByCities:(state, action) =>{
      console.log(action.payload , "City en slider")
      const filteredStates =  state.doctores
      const newFilter2 = filteredStates.data.filter(d=>{
        if(d.city.includes(action.payload)){
         return d
        }})
        state.filteredByCities = newFilter2
    },

    getDoctorsFiltered:(state, action) =>{
      const cities = action.payload.cities
      const specialities = action.payload.specialities
      console.log(action.payload , "ACtion en slider")
      const filteredStates =  state.doctores
      const newFilter3 = filteredStates.data.filter(d=>{
        if(d.city.includes(cities)){
          return d
        }})
        
        console.log(newFilter3, "NEWFILTER3")
      const newFilter4 = newFilter3.filter(t=>{
        if(t.specialities.includes(specialities)){
          return t
         }})
        state.newFilter = newFilter4
    }
  },
});

export const { getDoctorById, getAllDocs, getDoctorsBySpecialities, getDoctorsByCities, getDoctorsFiltered} = doctoresSlice.actions;

export default doctoresSlice.reducer;
