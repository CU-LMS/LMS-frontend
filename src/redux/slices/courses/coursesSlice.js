import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lodingApi: "idle",
  apiError: "",
  courses: [],
  enrollCourse: [],
  FAQList:[],
  myCourseList:[],
  announcementList:[],
  getRoleList:[],
  anouncCourseList:[],
  announceCourseWise: [],
  announcementResponse: [],
  nonEnrollCourseList:[],
  userAddedByAdmin:[],
  addUserLoading: "idle",
  
};


const course = createSlice({
  name: "course",
  initialState,
  reducers: {
    handleLoding: (state, { payload }) => {
      state.lodingApi = payload;
    },
    handleApiError: (state, {payload}) => {
        state.apiError = payload
    },
    handleCourses: (state, {payload}) => {
      state.courses = payload
    },
    handleEnrollCourses : (state, {payload}) => {
      state.enrollCourse = payload
    },
    
    handleFAQs: (state, {payload}) => {
      state.FAQList = payload
    },
    handleMyCourseData: (state, {payload}) => {
      state.myCourseList = payload
    },
    handleAddAnnouncement : (state, { payload}) => {
      state.announcementList = payload
    },
    handleGetRoleList : (state, { payload }) => {
      state.getRoleList = payload 
    },
    handleAcouncCourseList: (state, {payload}) => {
      state.anouncCourseList = payload
    },
    handleAnnounceCourseWiseList: (state, {payload}) => {
      state.announceCourseWise = payload
    },    
    handleShowAnnouncement: (state, {payload}) => {
      state.announcementResponse = payload
    },
    handleNonEnrollCourse: (state, {payload}) => {
      state.nonEnrollCourseList = payload
    },
    handleAddUserByAdmin: (state, {payload}) => {
      state.userAddedByAdmin = payload
    },
    handleAddUserLoading: (state, {payload}) => {
      state.addUserLoading = payload
    }
    
  },
});

export const {
  handleLoding,
  handleApiError,
  handleCourses,
  handleEnrollCourses,
  handleFAQs,
  handleMyCourseData,
  handleAddAnnouncement,
  handleGetRoleList,
  handleAcouncCourseList,
  handleAnnounceCourseWiseList,  
  handleShowAnnouncement,
  handleNonEnrollCourse,
  handleAddUserByAdmin,
  handleAddUserLoading
  
} = course.actions;

export default course.reducer;
