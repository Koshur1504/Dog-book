import { createSlice } from "@reduxjs/toolkit";

const storedFavourites = JSON.parse(localStorage.getItem("favourite")) || [];

const initialState = {
  favourite: storedFavourites,

  searchParam: "affenpinscher",
};

export const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    search: (state, action) => {
      if (!action.payload) {
        state.searchParam = "affenpinscher";
      } else {
        state.searchParam = action.payload;
      }
    },
    like: (state, action) => {
      let data = JSON.parse(localStorage.getItem("favourite")) || [];
      data?.push(action.payload);
      localStorage.setItem("favourite", JSON.stringify(data));
      state.favourite = JSON.parse(localStorage.getItem("favourite")) || [];
    },
    dislike: (state, action) => {
      let data = state.favourite;
      data = state.favourite.filter((item) => {
        return item !== action.payload;
      });
      localStorage.setItem("favourite", JSON.stringify(data));
      state.favourite = JSON.parse(localStorage.getItem("favourite")) || [];
    },
  },
});
export const { search, like, dislike } = likeSlice.actions;
export default likeSlice.reducer;
