import { handleDashboard, handleNewsData, handlePublishCourseData } from "./dashboardSlice";
import { toast } from "react-toastify";
import http from "../../../hoc/axiosClient";
import { useState } from "react";
import swal from "sweetalert";
import { handleLoding } from "../courses/coursesSlice";


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

export const addNews = (newsData) => async (dispatch) => {
  try {
    dispatch(handleLoding("loading"));

    let localStorageData = JSON.parse(localStorage.getItem("cuchdCsrf"));
    let accessToken = localStorageData.accessToken;
    const newFormData = new FormData();
    newFormData.append("newsTitle", newsData.newsTitle);
    newFormData.append("newsDesc", newsData.newsDesc);
    newFormData.append("newsStartDate", newsData.newsStartDate);
    newFormData.append("newsEndDate", newsData.newsEndDate);
    newFormData.append(
      "file",
      newsData.thumbNail,
      newsData.thumbNail.name
    );
    let config = {
      method: "post",
      url: "News/AddNewsDoc",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: newFormData,
    };
    let result = await http(config);
    console.log("News data", result.data);
    if (result.data.data != null) {
      swal({
        title: "News Created!",
        text: "News Created Successfully.",
        icon: "success",
        button: "Close",
      });
    } else {
      swal({
        title: "Warning",
        text: result.data.message,
        icon: "warning",
        button: "Close",
      });
    }
    dispatch(handleLoding("idle"));
  } catch (error) {
    console.log(error);
  }
};

export const readNewsData = () => async (dispatch) => {
  try {
    let localStorageData = JSON.parse(localStorage.getItem("cuchdCsrf"));
    let accessToken = localStorageData.accessToken;
    let config = {
      method: "post",
      url: "News/GetNewsList",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {
      },
    };
    const response = await http(config);
    dispatch(handleNewsData(response?.data?.data));
  } catch (error) {
    console.log(error);
  }
};

export const readPublishCourse = (pageNo, pageSize,filterValue) => async (dispatch) => {
  try {
    let credentials = JSON.parse(localStorage.getItem("cuchdCsrf"));
    let accessToken = credentials.accessToken;
    let config = {
      method: "post",
      url: "Course/GetCatalog",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {
        RoleId: credentials.roleId,
        UserId: credentials.userId,
        pageNo: pageNo,
        pageSize: pageSize,
        isFilter: false,
        filterValue: filterValue
      },
    };
    const response = await http(config);
    dispatch(handlePublishCourseData(response?.data));
  } catch (error) {
    console.log(error);
  }
};