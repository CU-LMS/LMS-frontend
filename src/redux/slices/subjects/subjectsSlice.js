import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lodingApi: "idle",
  apiError: "",
  subjectData: []
};

const subjects = createSlice({
  name: "subjects",
  initialState,
  reducers: {
    handleLoding: (state, { payload }) => {
      state.lodingApi = payload;
    },
    handleApiError: (state, {payload}) => {
        state.apiError = payload
    },
    handleSubjectData: (state, {payload}) => {
      state.subjectData = payload
    }
  },
});

export const {
  handleLoding,
  handleApiError,
  handleSubjectData
} = subjects.actions;

export default subjects.reducer;