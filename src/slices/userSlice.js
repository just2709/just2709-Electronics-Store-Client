import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../api/userApi";

export const register = createAsyncThunk("users/register", async (payload) => {
  const remember = payload.rememberMe;
  let data = await userApi.signup(payload);
  data = data.data;
  if (remember) {
    localStorage.setItem("access_token", data.jwt);
    localStorage.setItem("user", JSON.stringify(data.user));
  }
  return data.user;
});

export const login = createAsyncThunk("user/login", async (payload) => {
  var cart = [];
  const remember = payload.rememberMe;
  const data = await userApi.login(payload);
  if (remember) {
    localStorage.setItem("access_token", data.jwt);
    localStorage.setItem("user", JSON.stringify(data.user));
  }
  return data.user;
});
const userSlice = createSlice({
  name: "user",
  initialState: {
    open: false,
    current: JSON.parse(localStorage.getItem("user")) || {},
  },
  reducers: {
    openForm(state) {
      state.open = true;
    },
    closeForm(state) {
      state.open = false;
    },
    logout(state) {
      localStorage.removeItem("access_token");
      localStorage.removeItem("user");
      localStorage.removeItem("cart");
      state.current = {};
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(register.fulfilled, (state, action) => {
      // Add user to the state array
      state.current = action.payload;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.current = action.payload;
    });
  },
});
const { actions, reducer } = userSlice;
export const { logout, closeForm, openForm } = actions;
export default reducer;
