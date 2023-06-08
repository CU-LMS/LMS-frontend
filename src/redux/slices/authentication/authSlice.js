import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lodingApi: "idle",
  apiError: "",
  isAuth: false
};

const authentication = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    handleLoding: (state, { payload }) => {
      state.lodingApi = payload;
    },
    handleApiError: (state, {payload}) => {
        state.apiError = payload
    },
    handleIsAuth: (state, {payload}) => {
      state.isAuth = payload
    }
  },
});

export const {
  handleLoding,
  handleApiError,
  handleIsAuth
} = authentication.actions;

export default authentication.reducer;