import { handleDashboard } from "./dashboardSlice";
  import { toast } from "react-toastify";
  import http from "../../../hoc/axiosClient";
  import { useState } from "react";
  import swal from "sweetalert";


  export const readDashboardData = () => async (dispatch) => {
    try {
      let config = {
        method: "post",
        url: "Admin/GetDashBoardData",
        data: {         
        },
      };
      const response = await http(config);
      dispatch(handleDashboard(response?.data?.data));
    } catch (error) {
      console.log(error);
    }
  };