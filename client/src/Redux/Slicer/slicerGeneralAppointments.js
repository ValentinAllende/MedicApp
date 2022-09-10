import { createSlice } from "@reduxjs/toolkit";

export const generalAppointmentSlice = createSlice({
  name: "generalAppointments",
  initialState: {
    appointments: [],
    detailAppointment: {},
  },
  reducers: {
    getAllAppointments: (state, action) => {
      state.appointments = action.payload;
    },

    getAppointmentById: (state, action) => {
      state.detailAppointment = action.payload;
    },
  },
});

export const {
  getAllAppointments,
  getAppointmentById
} = generalAppointmentSlice.actions;

export default generalAppointmentSlice.reducer;
