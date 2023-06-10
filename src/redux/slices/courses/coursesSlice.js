import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lodingApi: "idle",
  apiError: "",
  courses: [],
  enrollCourse: []
  
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
    handleCourses: (state, {payload}) => {
      state.courses = payload
    },
    handleEnrollCourses : (state, {payload}) => {
      state.enrollCourse = payload
    }


  },
});

export const {
  handleLoding,
  handleApiError,
  handleCourses,
  handleEnrollCourses,
  
} = course.actions;

export default course.reducer;
