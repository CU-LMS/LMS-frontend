import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lodingApi: "idle",
  apiError: "",
  discData: []
};

const discipline = createSlice({
  name: "discipline",
  initialState,
  reducers: {
    handleLoding: (state, { payload }) => {
      state.lodingApi = payload;
    },
    handleApiError: (state, {payload}) => {
        state.apiError = payload
    },
    handleDiscData: (state, {payload}) => {
      state.discData = payload
    }
    
  },
});

export const {
  handleLoding,
  handleApiError,
  handleDiscData
} = discipline.actions;

export default discipline.reducer;