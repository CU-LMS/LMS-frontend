import { handleLoding, handleCourses } from "./coursesSlice";
import { toast } from "react-toastify";
import http from "../../../hoc/axiosClient";
import { useState } from "react";
import swal from "sweetalert";

export const createCourse = (courseData) => async (dispatch) => {
  try {
    dispatch(handleLoding("loading"));
    // let courseDataPayload = {
    //   courseName: courseData.courseName,
    //   courseCode: courseData.courseCode,
    //   availble: courseData.availble === "true" ? true : false,
    //   durationConfigurationId: parseInt(courseData.durationConfigurationId),
    //   enrolledCount: 0,
    //   dStartDate: courseData.dStartDate,
    //   dEndDate: courseData.dEndDate,
    //   dStartTime: "courseData.dStartTime",
    //   dEndTime: "courseData.dEndTime",
    //   guestsPermitted: true,
    //   bannerImageName: "courseData.bannerImageName",
    //   contentViewConfigurationId: parseInt(
    //     courseData.contentViewConfigurationId
    //   ),
    //   courseViewConfigurationId: parseInt(courseData.courseViewConfigurationId),
    //   autherName: courseData.autherName,
    //   disciplineId: parseInt(courseData.disciplineId),
    //   subjectId: parseInt(courseData.subjectId),
    //   semester: parseInt(courseData.semester),
    // };

    let courseDataPayload = {
      courseName: courseData.courseName,
      courseCode: courseData.courseCode,
      availble: courseData.availability === "true" ? true : false,
      durationConfigurationId: parseInt(courseData.duration),
      enrolledCount: 0,
      dStartDate: courseData.dStartDate,
      dEndDate: courseData.dEndDate,
      dStartTime: courseData?.dStartTime,
      dEndTime: courseData?.dEndTime,
      guestsPermitted: true,
      bannerImageName: courseData?.bannerImage?.name,
      contentViewConfigurationId: parseInt(courseData.contentView),
      courseViewConfigurationId: parseInt(courseData.courseView),
      autherName: courseData.authorName,
      disciplineId: parseInt(courseData.discipline),
      subjectId: parseInt(courseData.subject),
      semester: parseInt(courseData.semester),
    };
    console.log("courseDataPayload", courseDataPayload);
    let localStorageData = JSON.parse(
      localStorage.getItem("cuchdCsrf")
    );
    let accessToken = localStorageData.accessToken;
    let config = {
      method: "post",
      url: "Course/AddCourse",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: courseDataPayload,
    };
    let response = await http(config);
    console.log(response);


    if(response.data.statusCode === 200){

      localStorage.setItem('courseId', response.data.data.courseId);
      const newFormData = new FormData();
      newFormData.append('file', courseData.bannerImage, courseData.bannerImage.name);
      newFormData.append('file', courseData.courseDoc, courseData.courseDoc.name);
      newFormData.append('file', courseData.courseVideo, courseData.courseVideo.name);
      newFormData.append("courseId", response.data.data.courseId)

      const newFormData1 = new FormData();
      newFormData1.append('file', courseData.courseDoc, courseData.courseDoc.name);
      newFormData1.append('file', courseData.courseVideo, courseData.courseVideo.name);
      newFormData1.append("courseId", response.data.data.courseId)
      
      try {
        const response = await fetch('http://43.240.66.78:7263/api/aws/UploadDocument', {
        // const response = await fetch(`${process.env.DEV_URL}aws/UploadDocument`, {
          method: "POST",
          body: newFormData
        });
        const data = await response.json();
        if(data==201)
            {
              const response = await fetch('http://43.240.66.78:7263/api/course/AddCourseFilesDoc', {
              // const response = await fetch(`${process.env.DEV_URL}course/AddCourseFilesDoc`, {
                    method: "POST",
                    body: newFormData1
                });
    
                const data = await response.json(); 
                //toast.success("Upload Successfully", { autoClose: 6000 });
            }
      } catch (e) {
        console.log(e);
      }
      
      swal({
        title: "Course Created!",
        text: "Course Created Successfully.",
        icon: "success",
        button: "Done",
        
      });
    }
    dispatch(handleLoding("idle"));
  } catch (err) {
    console.log(err);
  }
};

export const readCourseData = () => async (dispatch) => {
  try {
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






