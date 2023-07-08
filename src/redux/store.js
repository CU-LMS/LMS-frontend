import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./slices/authentication/authSlice";
import subjectsReducer from "./slices/subjects/subjectsSlice";
import disciplineReducer from "./slices/subjects/disciplinedropSlice";
import courseReducer from "./slices/courses/coursesSlice";
import dashboardReducer from "./slices/Common/dashboardSlice";
import ratingReducer from "./slices/ratingCourse/RatingCourseSlice";

export const store = configureStore({
  reducer: {
    authenticationState: authenticationReducer,
    subjectsState: subjectsReducer,
    disciplineState: disciplineReducer,
    courseState: courseReducer,
    dashboardState: dashboardReducer,
    ratingState: ratingReducer,
  },
});
