import axios from "axios";
import { UnknownAction } from "redux";
import { toast } from "react-toastify";
import React, { Dispatch } from "react";
import { NavigateFunction } from "react-router-dom";

import { API_PATHS } from "../configs/api-config.ts";
import {
  getEmployeeStart,
  getEmployeeSuccess,
  getEmployeeFailed,
  deleteEmployeeStart,
  deleteEmployeeSuccess,
  deleteEmployeeFailed,
  createEmployeeStart,
  createEmployeeSuccess,
  createEmployeeFailed,
  updateEmployeeStart,
  updateEmployeeSuccess,
  updateEmployeeFailed,
  uploadDocumentStart,
  uploadDocumentSuccess,
  uploadDocumentFailed,
  getByIdStart,
  getByIdSuccess,
  getByIdFailed,
} from "../redux/employeeSlice.ts";
import { logoutSuccess } from "../redux/authSlice.ts";
import { formDataUploadEmployee } from "../utils/function.tsx";

export const getListEmployee = async (
  page: number | undefined,
  key: string | undefined,
  token: string,
  dispatch: Dispatch<UnknownAction>
) => {
  try {
    dispatch(getEmployeeStart());
    const results = await axios.get(`${API_PATHS.getEmployee}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        search: key,
        page: page,
      },
    });
    dispatch(getEmployeeSuccess(results.data.data));
  } catch (error) {
    if (error.response) {
      if (error.response.status === 401) {
        dispatch(logoutSuccess());
      }
    }
    dispatch(getEmployeeFailed());
  }
};

export const deleteEmployee = async (
  dispatch: Dispatch<UnknownAction>,
  token: string,
  body: React.Key[]
) => {
  try {
    dispatch(deleteEmployeeStart());
    const result = await axios.delete(API_PATHS.deleteEmployee, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: { record_ids: body },
    });

    if (result.status === 200) {
      toast(result.data.message, { type: "success" });
      dispatch(deleteEmployeeSuccess());
      return result.status;
    }
  } catch (error) {
    if (error.response) {
      dispatch(deleteEmployeeFailed());
      if (error.response.status === 401) {
        return dispatch(logoutSuccess());
      }
      toast(error.response.data.message, { type: "error" });
      return error.response.status;
    }
  }
};

export const uploadDocument = async (
  dispatch: Dispatch<UnknownAction>,
  token: string,
  body: FormData
) => {
  try {
    dispatch(uploadDocumentStart());
    const result = await axios.post(API_PATHS.uploadDocument, body, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(uploadDocumentSuccess());
    return result.data;
  } catch (error) {
    if (error.response) {
      dispatch(uploadDocumentFailed());
      if (error.response.status === 401) {
        return dispatch(logoutSuccess());
      }
      toast(error.response.data.message, { type: "error" });
      return;
    }
  }
};

export const createEmployee = async (
  dispatch: Dispatch<UnknownAction>,
  navigate: NavigateFunction,
  token: string,
  body: any
) => {
  try {
    const { document_upload } = body;
    dispatch(createEmployeeStart());
    const result = await axios.post(API_PATHS.getEmployee, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(createEmployeeSuccess());
    if (document_upload.length > 0) {
      const formData = formDataUploadEmployee(
        result.data.data.id,
        [],
        document_upload
      );
      const upload = await uploadDocument(dispatch, token, formData);
      if (upload) {
        toast(upload.message, { type: "success" });
        return navigate("/employee");
      }
    }
    toast(result.data.message, { type: "success" });
    return navigate("/employee");
  } catch (error) {
    if (error.response) {
      dispatch(createEmployeeFailed());
      if (error.response.status === 401) {
        return dispatch(logoutSuccess());
      }
      toast(error.response.data.message, { type: "error" });
      return undefined;
    }
  }
};

export const updateEmployee = async (
  dispatch: Dispatch<UnknownAction>,
  navigate: NavigateFunction,
  token: string,
  body: any,
  id: string
) => {
  try {
    const { document_upload = [], deleted_ids = [] } = body;

    dispatch(updateEmployeeStart());
    const result = await axios.put(`${API_PATHS.getEmployee}/${id}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(updateEmployeeSuccess());
    if (document_upload.length > 0 || deleted_ids.length > 0) {
      const formData = formDataUploadEmployee(id, deleted_ids, document_upload);
      const upload = await uploadDocument(dispatch, token, formData);
      if (upload) {
        toast(upload.message, { type: "success" });
        return navigate("/employee");
      }
    }
    toast(result.data.message, { type: "success" });
    return navigate("/employee");
  } catch (error) {
    if (error.response) {
      dispatch(updateEmployeeFailed());
      if (error.response.status === 401) {
        return dispatch(logoutSuccess());
      }
      toast(error.response.data.message, { type: "error" });
      return;
    }
  }
};

export const getEmployeeById = async (
  dispatch: Dispatch<UnknownAction>,
  token: string,
  id: number | string
) => {
  try {
    dispatch(getByIdStart());
    const result = await axios.get(`${API_PATHS.getEmployee}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(getByIdSuccess());
    return result.data.data;
  } catch (error) {
    if (error.response) {
      dispatch(getByIdFailed());
      if (error.response.status === 401) {
        return dispatch(logoutSuccess());
      }
      return toast(error.response.data.message, { type: "error" });
    }
  }
};
