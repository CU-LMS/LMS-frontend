import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./slices/authentication/authSlice";
import subjectsReducer from "./slices/subjects/subjectsSlice";
import disciplineReducer from "./slices/subjects/disciplinedropSlice";
import courseReducer from "./slices/courses/coursesSlice";

export const store = configureStore({
  reducer: {
    authenticationState: authenticationReducer,
    subjectsState: subjectsReducer,
    disciplineState: disciplineReducer,
    courseState: courseReducer

  },
});
