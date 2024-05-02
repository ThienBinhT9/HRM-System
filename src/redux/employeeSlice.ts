import { createSlice } from "@reduxjs/toolkit";

import { IEmployeeState } from "../interfaces/employee-interface.ts";

const initialState: IEmployeeState = {
  employees: {},
  getEmpoyee: {
    loading: false,
  },
  deleteE: {
    loading: false,
  },
  create: {
    loading: false,
  },
  update: {
    loading: false,
  },
  upload: {
    loading: false,
  },
  getById: {
    loading: false,
  },
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    //GET
    getEmployeeStart: (state: IEmployeeState) => {
      state.getEmpoyee.loading = true;
    },
    getEmployeeSuccess: (state: IEmployeeState, action) => {
      state.getEmpoyee.loading = false;
      state.employees = action.payload;
    },
    getEmployeeFailed: (state: IEmployeeState) => {
      state.getEmpoyee.loading = false;
    },

    //DELETE
    deleteEmployeeStart: (state: IEmployeeState) => {
      state.deleteE.loading = true;
    },
    deleteEmployeeSuccess: (state: IEmployeeState) => {
      state.deleteE.loading = false;
    },
    deleteEmployeeFailed: (state: IEmployeeState) => {
      state.deleteE.loading = false;
    },

    //CREATE
    createEmployeeStart: (state: IEmployeeState) => {
      state.create.loading = true;
    },
    createEmployeeSuccess: (state: IEmployeeState) => {
      state.create.loading = false;
    },
    createEmployeeFailed: (state: IEmployeeState) => {
      state.create.loading = false;
    },

    //UPDATE
    updateEmployeeStart: (state: IEmployeeState) => {
      state.update.loading = true;
    },
    updateEmployeeSuccess: (state: IEmployeeState) => {
      state.update.loading = false;
    },
    updateEmployeeFailed: (state: IEmployeeState) => {
      state.update.loading = false;
    },

    //UPLOAD DOCUMENT
    uploadDocumentStart: (state: IEmployeeState) => {
      state.upload.loading = true;
    },
    uploadDocumentSuccess: (state: IEmployeeState) => {
      state.upload.loading = false;
    },
    uploadDocumentFailed: (state: IEmployeeState) => {
      state.upload.loading = false;
    },

    //GET EMPLOYEE BY ID
    getByIdStart: (state: IEmployeeState) => {
      state.getById.loading = true;
    },
    getByIdSuccess: (state: IEmployeeState) => {
      state.getById.loading = false;
    },
    getByIdFailed: (state: IEmployeeState) => {
      state.getById.loading = false;
    },
  },
});

export const {
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
} = employeeSlice.actions;
export default employeeSlice.reducer;
