import { handleRating } from "./RatingCourseSlice";
import { handleAddUserLoading } from "../courses/coursesSlice";
import http from "../../../hoc/axiosClient";
import { handleRatingData } from "./RatingCourseSlice";
import swal from "sweetalert";
// add course rating api call 

export const ratingCourseAction = (courseId, courseRating) => async (dispatch) => {
  try {
    dispatch(handleAddUserLoading("loading"));
    let credentials = JSON.parse(localStorage?.getItem("cuchdCsrf"));
    let config = {
      method: "post",
      url: "CourseRating/AddCourseRating",
      data: {
        userId: credentials.userId,
        rating: courseRating,
        courseId: courseId,
        isEnroll: true
      },
    };

    let response = await http(config);
    console.log(response, "rating response");
    dispatch(handleRating(response?.data?.data));
    dispatch(handleAddUserLoading("idle"));
  } catch (err) {
    dispatch(handleAddUserLoading("idle"));
  }
};


export const readRatingData = (courseId) => async (dispatch) => {
  try {
    let localStorageData = JSON.parse(localStorage.getItem("cuchdCsrf"));
    let accessToken = localStorageData.accessToken;
    let config = {
      method: "post",
      url: "CourseRating/GetCourseRatingView",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {      
        courseId,   
      },
    };
    const response = await http(config);
    dispatch(handleRatingData(response?.data?.data));
  } catch (error) {
    console.log(error);
  }
};


export const createFeedback = (data) => async (dispatch) => {
  try {
    

    let localStorageData = JSON.parse(localStorage.getItem("cuchdCsrf"));
    let accessToken = localStorageData.accessToken;
    const newFormData = new FormData();
    let curl="Feedback/AddFeedback";
   
   
   
    
    let config = {
      method: "post",
      url: curl,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {
        id:0,
        email:data.email,
        mobile_Number:data.mobile_Number,
        feedbackTypeId :Number(data.feedbackType),
        feedbackCategoryId:Number(data.feedbackCategory),
        userName:data.userName,
        descriptions:data.descriptions,
      },
    };
    let result = await http(config);
    console.log("check duplicate", result.data);
    if (result.data.data != null) {
      swal({
        title: "success",
        text: "Feedback Created Successfully.",
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
   
  } catch (err) {
    console.log(err);
    
  }
};