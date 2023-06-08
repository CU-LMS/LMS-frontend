import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lodingApi: "idle",
  apiError: "",
  
};

const course = createSlice({
  name: "course",
  initialState,
  reducers: {
    handleLoding: (state, { payload }) => {
      state.lodingApi = payload;
    },
    handleApiError: (state, {payload}) => {
        state.apiError = payload
    },


  },
});

export const {
  handleLoding,
  handleApiError,
  
} = course.actions;

export default course.reducer;