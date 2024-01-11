import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: "",
  loading: false,
  error: false,
  token: "",
};

const authSlice = createSlice({
  name: "auth",

  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.user = payload.user.username;
      state.token = payload.token;
    },
    registerSuccess: (state, { payload }) => {
      state.loading = false;
      state.user = payload.data.username;
      state.token = payload.token;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
    logOutSuccess: (state) => {
      state.user = "";
      state.token = "";
    },
  },
});

export const { fetchStart, loginSuccess, fetchFail, registerSuccess, logOutSuccess } =
  authSlice.actions;
export default authSlice.reducer;
