import axios from "axios";
import { Dispatch, UnknownAction } from "redux";

import { API_PATHS } from "../configs/api-config.ts";
import { logoutSuccess } from "../redux/authSlice.ts";
import {
  getMarriage,
  getDepartment,
  getGrade,
  getPosition,
  getBenefits,
  getCompany,
} from "../redux/commonSlice.ts";
import store from "../redux/store.ts";

export const getOptionsDepartment = async (
  token: string,
  dispatch: Dispatch<UnknownAction>
) => {
  const department = store.getState().common.department;
  try {
    if (department.length > 0) return;
    const result = await axios.get(API_PATHS.getOptionsDepartment, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(getDepartment(result.data.data));
    return result.data.data;
  } catch (error) {
    if (error.response.status === 401) {
      return dispatch(logoutSuccess());
    }
    return [];
  }
};

export const getOptionsPosition = async (
  token: string,
  dispatch: Dispatch<UnknownAction>
) => {
  const position = store.getState().common.position;
  try {
    if (position.length > 0) return;
    const result = await axios.get(API_PATHS.getOptionsPosition, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(getPosition(result.data.data));
    return result.data.data;
  } catch (error) {
    if (error.response.status === 401) {
      return dispatch(logoutSuccess());
    }
    return [];
  }
};

export const getOptionsBenefit = async (
  token: string,
  dispatch: Dispatch<UnknownAction>
) => {
  const benefits = store.getState().common.benefits;
  try {
    if (benefits.length > 0) return;
    const result = await axios.get(API_PATHS.getOptionsBenefit, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(getBenefits(result.data.data));
    return result.data.data;
  } catch (error) {
    if (error.response.status === 401) {
      return dispatch(logoutSuccess());
    }
    return [];
  }
};

export const getOptionsGrade = async (
  token: string,
  dispatch: Dispatch<UnknownAction>
) => {
  const grade = store.getState().common.grade;
  try {
    if (grade.length > 0) return;
    const result = await axios.get(API_PATHS.getOptionsGrade, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(getGrade(result.data.data));
    return result.data.data;
  } catch (error) {
    if (error.response.status === 401) {
      return dispatch(logoutSuccess());
    }
    return [];
  }
};

export const getOptionsMarriage = async (
  token: string,
  dispatch: Dispatch<UnknownAction>
) => {
  const marriage = store.getState().common.marriage;
  try {
    if (marriage.length > 0) return;
    const result = await axios.get(API_PATHS.getOptionsMarriage, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(getMarriage(result.data.data));
    return result.data.data;
  } catch (error) {
    if (error.response.status === 401) {
      dispatch(logoutSuccess());
    }
    return [];
  }
};

export const getOptionsCompany = async (dispatch: Dispatch<UnknownAction>) => {
  const company = store.getState().common.company;
  try {
    if (company.length > 0) return;
    const result = await axios.get(API_PATHS.getOptionsCompany);
    dispatch(getCompany(result.data.data));
  } catch (error) {
    if (error.response) {
      return [];
    }
  }
};
