import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    lodingApi: "idle",
    apiError: "",    
    addUserLoading: "idle",
    getDashboardData:[], 
    getNewsData:[], 
    enrolledStudents: [],
    enrolledCourses: [],
    recordCount: 0,  
    numberOfPages: 0,
    getPublishCourseData:null,
    getDraftCourseData:null,
  };

  
const dashboard = createSlice({
    name: "dashboard",
    initialState,
    reducers: {
      handleLoding: (state, { payload }) => {
        state.lodingApi = payload;
      },
      handleApiError: (state, {payload}) => {
          state.apiError = payload
      },
      handleDashboard: (state, {payload}) => {
        state.getDashboardData = payload
      },
      handleNewsData: (state, {payload}) => {
        state.getNewsData = payload
      },
      handleEnrolledStudents: (state, action) => {
        state.enrolledStudents = action.payload
      }, 
      handleEnrolledCourses: (state, action) => {
        state.enrolledCourses = action.payload;
      },
      handleSetRecordCount: (state, action) => {
        state.recordCount = action.payload
      },
      handleSetNumberOfPages: (state, action) => {
        state.numberOfPages = action.payload;
      },

      handlePublishCourseData: (state, {payload}) => {
        state.getPublishCourseData = payload
      },

      handleDraftCourseData: (state, {payload}) => {
        state.getDraftCourseData = payload
      },
      
    },
  });
  
  export const {
    handleLoding,
    handleApiError,
    handleDashboard,
    handleNewsData,
    handleEnrolledStudents,
    handleSetRecordCount,
    handleSetNumberOfPages,
    handleEnrolledCourses,
    handlePublishCourseData,
    handleDraftCourseData
  } = dashboard.actions;
  
  export default dashboard.reducer;