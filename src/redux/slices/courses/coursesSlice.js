import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lodingApi: "idle",
  apiError: "",
  courses: [],
  enrollCourse: [],
  FAQList:[]
  
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
    },
    
    handleFAQs: (state, {payload}) => {
      state.FAQList = payload
    },

  },
});

export const {
  handleLoding,
  handleApiError,
  handleCourses,
  handleEnrollCourses,
  handleFAQs,
  
} = course.actions;

export default course.reducer;
