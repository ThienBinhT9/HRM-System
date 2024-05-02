import axios from "axios";
import { toast } from "react-toastify";
import { Dispatch } from "react";
import { UnknownAction } from "redux";
import { NavigateFunction } from "react-router-dom";

import { API_PATHS } from "../configs/api-config.ts";
import { ILoginParams, IChangePassword } from "../interfaces/auth-interface.ts";
import {
  loginStart,
  loginSuccess,
  loginFailed,
  logoutStart,
  logoutSuccess,
  forgot_passwordStart,
  forgot_passwordSuccess,
  forgot_passwordFailed,
  reset_passwordStart,
  reset_passwordSuccess,
  reset_passwordFailed,
} from "../redux/authSlice.ts";
import { getUserDetail } from "./user-service.ts";

export const login = async (
  dispatch: Dispatch<UnknownAction>,
  navigate: NavigateFunction,
  body: ILoginParams
) => {
  try {
    dispatch(loginStart());
    const result = await axios.post(API_PATHS.login, body);
    if (result.status === 200) {
      dispatch(loginSuccess(result.data.data.token));
      await getUserDetail(dispatch, result.data.data.token);
      return navigate("/employee");
    }
  } catch (error) {
    if (error.response) {
      dispatch(loginFailed(error.response.data.message));
      return toast(error.response.data.message, { type: "error" });
    } else {
      dispatch(loginFailed("Có lỗi sảy ra. Hãy xem lại đường truyền mạng"));
      toast("Có lỗi sảy ra. Hãy xem lại đường truyền mạng!", { type: "info" });
    }
  }
};

export const logout = async (
  dispatch: Dispatch<UnknownAction>,
  navigate: NavigateFunction,
  token: string
) => {
  try {
    dispatch(logoutStart());
    const result = await axios.post(API_PATHS.logout, " ", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (result.status === 200) {
      dispatch(logoutSuccess());
      return navigate("/auth/login");
    }
  } catch (error) {
    if (error.response.status === 401) {
      return dispatch(logoutSuccess());
    }
    return toast("Đường truyền mạng không ổn định", { type: "info" });
  }
};

export const forgot_pasword = async (
  dispatch: Dispatch<UnknownAction>,
  body: { email: string }
) => {
  try {
    dispatch(forgot_passwordStart());
    const result = await axios.post(API_PATHS.forgotPassword, body);
    if (result.status === 200) {
      dispatch(forgot_passwordSuccess());
    }
  } catch (error) {
    dispatch(forgot_passwordFailed());
    if (error.response) {
      return toast(error.response.data.message, { type: "error" });
    }
    return toast("Error network. Please review the transmission ", {
      type: "error",
    });
  }
};

export const changePassword = async (
  dispatch: Dispatch<UnknownAction>,
  token: string,
  body: IChangePassword
) => {
  try {
    dispatch(reset_passwordStart());
    const result = await axios.post(API_PATHS.changePassword, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (result.status === 200) {
      dispatch(reset_passwordSuccess());
      return toast(result.data.message, { type: "success" });
    }
  } catch (error) {
    if (error.response) {
      dispatch(reset_passwordFailed());
      if (error.response.status === 401) {
        return dispatch(logoutSuccess());
      }
      return toast(error.response.data.message, { type: "error" });
    }
  }
};

export const resetPassword = async (
  dispatch: Dispatch<UnknownAction>,
  navigate: NavigateFunction,
  body: IChangePassword
) => {
  try {
    dispatch(reset_passwordStart());
    const result = await axios.post(API_PATHS.resetPassword, body);
    if (result.status === 200) {
      dispatch(reset_passwordSuccess());
      toast(result.data.message, { type: "success" });
      return navigate("/auth/sign-in");
    }
  } catch (error) {
    if (error.response) {
      dispatch(reset_passwordFailed());
      return toast(error.response.data.message, { type: "error" });
    }
  }
};
