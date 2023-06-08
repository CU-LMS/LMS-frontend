import { handleLoding } from "./coursesSlice";
import { toast } from "react-toastify";
import http from "../../../hoc/axiosClient";
export const createCourse = (courseData) => async (dispatch) => {
  try {
    dispatch(handleLoding("loading"));
    let courseDataPayload = {
      courseName: courseData.courseName,
      courseCode: courseData.courseCode,
      availble: courseData.availble === "true" ? true: false,
      durationConfigurationId: parseInt(courseData.durationConfigurationId),
      enrolledCount: 0,
      dStartDate: courseData.dStartDate,
      dEndDate: courseData.dEndDate,
      dStartTime: "courseData.dStartTime",
      dEndTime: "courseData.dEndTime",
      guestsPermitted: true,
      bannerImageName: "courseData.bannerImageName",
      contentViewConfigurationId: parseInt(courseData.contentViewConfigurationId),
      courseViewConfigurationId: parseInt(courseData.courseViewConfigurationId),
      autherName: courseData.autherName,
      disciplineId: parseInt(courseData.disciplineId),
      subjectId: parseInt(courseData.subjectId),
      semester: parseInt(courseData.semester),
    };
    let localStorageData = JSON.parse(
      localStorage.getItem("cuchd-accessToken")
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
    if(response.data.data === true){
      toast.success("Course Added Successfully", { autoClose: 6000 });
      // alert("Sucessfully Added")
    }
    dispatch(handleLoding("idle"));
  } catch (err) {
    console.log(err);
  }
};
