import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ratingByStudent: [],
  getCourseRatingData:[]
};

const rating = createSlice({
  name: "rating",
  initialState,
  reducers: {
    handleRating: (state, { payload }) => {
      state.ratingByStudent = payload;
    },
    handleRatingData: (state, { payload }) => {
      state.getCourseRatingData = payload;
    },
    
  },
});

export const { handleRating,handleRatingData } = rating.actions;

export default rating.reducer;
