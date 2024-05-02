import axios from "axios";
import { Dispatch } from "react";
import { UnknownAction } from "redux";

import { API_PATHS } from "../configs/api-config.ts";

import {
  getDetailStart,
  getDetailSuccess,
  getDetailFailed,
} from "../redux/userSlice.ts";
import { logoutSuccess } from "../redux/authSlice.ts";

export const getUserDetail = async (
  dispatch: Dispatch<UnknownAction>,
  token: string
) => {
  try {
    dispatch(getDetailStart());
    const result = await axios.get(API_PATHS.getDetailUser, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(getDetailSuccess(result.data.data));
  } catch (error) {
    if (error.response) {
      if (error.response.status === 401) {
        return dispatch(logoutSuccess());
      }
    }
    dispatch(getDetailFailed());
  }
};
