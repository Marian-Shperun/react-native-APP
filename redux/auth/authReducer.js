import { createSlice } from "@reduxjs/toolkit";

const state = {
  userId: null,
  nickName: null,
  userEmail: null,
  photoProfile: null,
  stateChange: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: state,
  reducers: {
    updateUserProfile: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      nickName: payload.nickName,
      userEmail: payload.userEmail,
      photoProfile: payload.photoProfile,
    }),
    authStateChange: (state, { payload }) => ({
      ...state,
      stateChange: payload.stateChange,
    }),
    authSignOut: () => state,
    updateStateProfile: (state, { payload }) => ({
      ...state,
      photoProfile: payload.photoProfile,
    }),
  },
});
