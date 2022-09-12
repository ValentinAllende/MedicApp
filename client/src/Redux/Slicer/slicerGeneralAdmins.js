import { createSlice } from "@reduxjs/toolkit";

export const generalAdminSlice = createSlice({
  name: "admins",
  initialState: {
    admins: [],
    detailAdmin: {},
    changeSection: "Dashboard"
  },
  reducers: {
    getAllAdmins: (state, action) => {
      state.admins = action.payload;
    },

    getAdminById: (state, action) => {
      state.detailAdmin = action.payload;
    },

    changeStatus: (state) => {
      return state;
    },

    editAdmin: (state) => {
      return state;
    },

    postAdmin: (state) => {
      return state;
    },

    changeSection: (state, action) => {
      state.changeSection = action.payload;
    },

  },
});

export const {
  changeSection,
  getAllAdmins,
  getAdminById,
  changeStatus,
} = generalAdminSlice.actions;

export default generalAdminSlice.reducer;
