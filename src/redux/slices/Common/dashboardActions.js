import { handleDashboard, handleEnrolledStudents,handlePublishCourseData, handleEnrolledCourses, handleNewsData, handleSetNumberOfPages, handleSetRecordCount } from "./dashboardSlice";
import { toast } from "react-toastify";
import http from "../../../hoc/axiosClient";
import { useState } from "react";
import swal from "sweetalert";
import { handleLoding } from "../courses/coursesSlice";
import { useSelector } from "react-redux";




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

// handle get enrolled students
export const getEnrolledStudents = (pageSize, pageNum) => async (dispatch) => {

  console.log('inside get enroll students');

  let localStorageData = JSON.parse(localStorage.getItem("cuchdCsrf"));
  console.log(localStorageData?.userId);
  let accessToken = localStorageData.accessToken;
  const item = {
    userId: localStorageData?.userId,
    roleId: parseInt(localStorageData?.roleId),
    // courseId: 0,
    pageNo: pageNum,
    pageSize: pageSize,
    isFilter: true,
    filterValue: ""
  }

  try {
    console.log('inside try');

    let config = {
      method: "post",
      url: "EnrollCourse/GetEnrolledStudents",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: item
    };
    const response = await http(config);
    console.log('getEnrollStudents', response);
    dispatch(handleEnrolledStudents(response?.data?.data));
    dispatch(handleSetRecordCount(response?.data?.recordCount));
    dispatch(handleSetNumberOfPages(response?.data?.recordCount, pageSize));
  } catch (e) {
    console.log(e);
  }


}

// handle get enrolled courses
export const getEnrolledCourses = (pageSize, pageNum) => async (dispatch) => {

  console.log('inside get enroll students');

  let localStorageData = JSON.parse(localStorage.getItem("cuchdCsrf"));
  let accessToken = localStorageData.accessToken;
  const item = {
    userId: localStorageData?.userId,
    roleId: parseInt(localStorageData?.roleId),
    // courseId: 0,
    pageNo: pageNum,
    pageSize: pageSize,
    isFilter: true,
    filterValue: ""
  }

  try {
    console.log('inside try');

    let config = {
      method: "post",
      url: "EnrollCourse/GetEnrolledCourses",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: item
    };
    const response = await http(config);
    console.log('getEnrolledCourses', response);
    dispatch(handleEnrolledCourses(response?.data?.data));
    dispatch(handleSetRecordCount(response?.data?.recordCount));
    dispatch(handleSetNumberOfPages(response?.data?.recordCount, pageSize));
  } catch (e) {
    console.log(e);
  }


}

// handle get data over search text 
export const getDataBySearch = (type, text, pageSize, pageNum) => async (dispatch) => {
  let localStorageData = JSON.parse(localStorage.getItem("cuchdCsrf"));
  let accessToken = localStorageData.accessToken;
  const item = {
    userId: localStorageData?.userId,
    roleId: parseInt(localStorageData?.roleId),
    // courseId: 0,
    pageNo: pageNum,
    pageSize: pageSize,
    isFilter: true,
    filterValue: text
  }

  try {

    if (type === "enrolledStudents") {
      let config = {
        method: "post",
        url: "EnrollCourse/GetEnrolledStudents",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        data: item
      };
      const response = await http(config);
      console.log("search item: ", response?.data);
      dispatch(handleEnrolledStudents(response?.data?.data));
      dispatch(handleSetRecordCount(response?.data?.recordCount));
      dispatch(handleSetNumberOfPages(response?.data?.recordCount, pageSize));
    }
     else {
      let config = {
        method: "post",
        url: "EnrollCourse/GetEnrolledCourses",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        data: item
      };
      const response = await http(config);
      dispatch(handleEnrolledCourses(response?.data?.data));
      dispatch(handleSetRecordCount(response?.data?.recordCount));
      dispatch(handleSetNumberOfPages(response?.data?.recordCount, pageSize));
    }




  } catch (e) 
  {
    console.log(e);
  }
} 
