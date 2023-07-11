import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    lodingApi: "idle", // "loading", "idle"
    apiError: "",    
    addUserLoading: "idle",
    getDashboardData:[], 
    getNewsData:[], 
    spinner: false,
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
      handleLoding: (state, action) => {
        state.lodingApi = action.payload;
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
      handleSpinner: (state, action) => {
        state.spinner = action.payload;
      }
      
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
    handleDraftCourseData,
    handleSpinner
  } = dashboard.actions;
  
  export default dashboard.reducer;