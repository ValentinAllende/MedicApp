import { createSlice } from "@reduxjs/toolkit";

export const adminsSlice = createSlice({
  name: "admins",
  initialState: {
    admin: [],
    detailAdmin: {},
    changeSection: "Dashboard"
  },
  reducers: {

    changeSection: (state, action) => {
      state.changeSection = action.payload;
    },

  },
});

export const {
  changeSection,
} = adminsSlice.actions;

export default adminsSlice.reducer;
