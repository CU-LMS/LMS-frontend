import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    lodingApi: "idle",
    apiError: "",    
    addUserLoading: "idle",
    getDashboardData:[],    
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
      
      
    },
  });
  
  export const {
    handleLoding,
    handleApiError,
    handleDashboard
  } = dashboard.actions;
  
  export default dashboard.reducer;