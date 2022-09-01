import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const placeholderSlice = createSlice({
  name: "placeholder",
  initialState,
  reducers: {
    dummyReducer: (state) => {
      //action goes here
    },
  },
});

export const { dummyReducer } = placeholderSlice.actions;

export default placeholderSlice.reducer;
