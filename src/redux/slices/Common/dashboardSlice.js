import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    lodingApi: "idle",
    apiError: "",    
    addUserLoading: "idle",
    getDashboardData:[], 
    getNewsData:[],
    getPublishCourseData:null   
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
      handlePublishCourseData: (state, {payload}) => {
        state.getPublishCourseData = payload
      },
      
    },
  });
  
  export const {
    handleLoding,
    handleApiError,
    handleDashboard,
    handleNewsData,
    handlePublishCourseData
  } = dashboard.actions;
  
  export default dashboard.reducer;