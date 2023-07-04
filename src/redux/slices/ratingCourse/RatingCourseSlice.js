import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ratingByStudent: [],
};

const rating = createSlice({
  name: "rating",
  initialState,
  reducers: {
    handleRating: (state, { payload }) => {
      state.ratingByStudent = payload;
    },
  },
});

export const { handleRating } = rating.actions;

export default rating.reducer;
