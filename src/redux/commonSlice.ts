import { createSlice } from "@reduxjs/toolkit";

import {
  IDepartment,
  IMarriage,
  IPosition,
  IGrade,
  IBenefit,
  ICompany,
} from "../interfaces/common-interface.ts";

interface ICommonState {
  marriage: Array<IMarriage>;
  department: Array<IDepartment>;
  position: Array<IPosition>;
  grade: Array<IGrade>;
  benefits: Array<IBenefit>;
  company: Array<ICompany>;
}

const initialState: ICommonState = {
  marriage: [],
  department: [],
  position: [],
  grade: [],
  benefits: [],
  company: [],
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    getMarriage: (state, action) => {
      state.marriage = action.payload;
    },
    getDepartment: (state, action) => {
      state.department = action.payload;
    },
    getPosition: (state, action) => {
      state.position = action.payload;
    },
    getGrade: (state, action) => {
      state.grade = action.payload;
    },
    getBenefits: (state, action) => {
      state.benefits = action.payload;
    },
    getCompany: (state, action) => {
      state.company = action.payload;
    },
  },
});

export const {
  getMarriage,
  getDepartment,
  getPosition,
  getGrade,
  getBenefits,
  getCompany,
} = commonSlice.actions;
export default commonSlice.reducer;
