import { createSlice } from "@reduxjs/toolkit";
import { IAuthState } from "../interfaces/auth-interface.ts";

const initialState: IAuthState = {
  token: "",
  login: {
    loading: false,
    message: "",
  },
  register: {
    loading: false,
    message: "",
  },
  logout: {
    loading: false,
  },
  forgot_password: {
    loading: false,
  },
  reset_password: {
    loading: false,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    //LOGIN
    loginStart: (state: IAuthState) => {
      state.login.loading = true;
      state.login.message = "";
    },
    loginSuccess: (state: IAuthState, action) => {
      state.login.loading = false;
      state.token = action.payload;
    },
    loginFailed: (state: IAuthState, action) => {
      state.login.loading = false;
      state.login.message = action.payload;
    },

    //REGISTER
    registerStart: (state: IAuthState) => {
      state.register.loading = true;
      state.register.message = "";
    },
    registerSuccess: (state: IAuthState, action) => {
      state.register.loading = false;
      state.token = action.payload;
    },
    registerFailed: (state: IAuthState, action) => {
      state.register.loading = false;
      state.register.message = action.payload;
    },

    //LOGOUT
    logoutStart: (state: IAuthState) => {
      state.logout.loading = true;
    },
    logoutSuccess: (state: IAuthState) => {
      state.logout.loading = false;
      state.token = "";
    },
    logoutFailed: (state: IAuthState) => {
      state.logout.loading = false;
    },

    //FORGOT PASSWORD
    forgot_passwordStart: (state: IAuthState) => {
      state.forgot_password.loading = true;
    },
    forgot_passwordSuccess: (state: IAuthState) => {
      state.forgot_password.loading = false;
    },
    forgot_passwordFailed: (state: IAuthState) => {
      state.forgot_password.loading = false;
    },

    //RESET PASSWORD
    reset_passwordStart: (state: IAuthState) => {
      state.reset_password.loading = true;
    },
    reset_passwordSuccess: (state: IAuthState) => {
      state.reset_password.loading = false;
    },
    reset_passwordFailed: (state: IAuthState) => {
      state.reset_password.loading = false;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailed,
  logoutStart,
  logoutSuccess,
  logoutFailed,
  forgot_passwordStart,
  forgot_passwordSuccess,
  forgot_passwordFailed,
  reset_passwordStart,
  reset_passwordSuccess,
  reset_passwordFailed,
} = authSlice.actions;
export default authSlice.reducer;
