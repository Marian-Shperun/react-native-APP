import { createSlice } from "@reduxjs/toolkit";

const state = {
  items: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState: state,
  reducers: {
    updatePosts: (state, { payload }) => ({
      ...state,
      items: payload,
    }),
  },
});
