import { handleLoding, handleCourses } from "./coursesSlice";
import { toast } from "react-toastify";
import http from "../../../hoc/axiosClient";
import { useState } from "react";
import swal from "sweetalert";

export const createCourse = (courseData) => async (dispatch) => {
  try {
    dispatch(handleLoding("loading"));
  
    let localStorageData = JSON.parse(
      localStorage.getItem("cuchdCsrf")
    );
    let accessToken = localStorageData.accessToken;
      const newFormData = new FormData();      
      newFormData.append('courseName', courseData.courseName);
      newFormData.append('courseCode', courseData.courseCode);
      newFormData.append('availble', courseData.availability);
      newFormData.append('durationConfigurationId', courseData.duration);
      newFormData.append('dStartDate', courseData.dStartDate);
      newFormData.append('dEndDate', courseData.dEndDate);
      newFormData.append('dStartTime', courseData.dStartTime);
      newFormData.append('dEndTime', courseData.dEndTime);
      newFormData.append('guestsPermitted', true);
      newFormData.append('bannerImageName', courseData?.bannerImage?.name);
      newFormData.append('contentViewConfigurationId', parseInt(courseData.contentView));
      newFormData.append('courseViewConfigurationId', parseInt(courseData.courseView));
      newFormData.append('disciplineId', courseData.discipline);
      newFormData.append('subjectId', courseData.subject);
      newFormData.append('semester', courseData.semester);
      newFormData.append('file', courseData.bannerImage, courseData.bannerImage.name);
      newFormData.append('file', courseData.courseDoc, courseData.courseDoc.name);
      newFormData.append('file', courseData.courseVideo, courseData.courseVideo.name);
     
      
      let config = {
        method: "post",
        url: "course/AddCourseFilesDoc",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        data: newFormData,
      };
      let result = await http(config);
      console.log("check duplicate",result.data);
      if(result.data.data!=null)
      {
        swal({
          title: "Course Created!",
          text: "Course Created Successfully.",
          icon: "success",
          button: "Close",
          
        });
      }
      else
      {
        swal({
          title: "Warning",
          text: result.data.message,
          icon: "warning",
          button: "Close",
          
        });
      }
      dispatch(handleLoding("idle"));
      
    
  
  
  } catch (err) {
    console.log(err);
    dispatch(handleLoding("idle"));
  }

};

export const readCourseData = () => async (dispatch) => {
  try {
    console.log('Abhaycccccc',"kkkkkkkk")
    let config = {
      method: "post",
      url: "Course/GetCourseList",
      data: {
        pageNo: 0,
        pageSize: 0,
      },
    };
    const response = await http(config);
    dispatch(handleCourses(response?.data?.data));
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
export const enrollCourse = (courseId) => async (dispatch) => {
  try {
    let credentials = JSON.parse(localStorage?.getItem("cuchdCsrf"));
    let config = {
      method: "post",
      url: "EnrollCourse/AddEnrollCourse",
      data: {
        learnerUserId: credentials.userId,
        courseId: courseId,
      },
    };

    const response = await http(config);
    if (response?.data?.statusCode === 200) {
      toast.success("Sucessfully Enrolled");
      window.location.href = `/watch-course?courseId=${courseId}`;
    } else {
      toast.error("Error While Enrolling");
     
    }
  } catch (error) {
    toast.error("Error While Enrolling");
  }
};






