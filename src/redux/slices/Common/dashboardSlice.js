import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    lodingApi: "idle",
    apiError: "",    
    addUserLoading: "idle",
    getDashboardData:[], 
    getNewsData:[],   
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
      
      
    },
  });
  
  export const {
    handleLoding,
    handleApiError,
    handleDashboard,
    handleNewsData
  } = dashboard.actions;
  
  export default dashboard.reducer;