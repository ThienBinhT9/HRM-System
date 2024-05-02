import { createSlice } from "@reduxjs/toolkit";

import { IUserState } from "../interfaces/user-interface.ts";

const initialState: IUserState = {
  user: {},
  getDetail: {
    loading: false,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    //GET DETAIL
    getDetailStart: (state: IUserState) => {
      state.getDetail.loading = true;
    },
    getDetailSuccess: (state: IUserState, action) => {
      state.getDetail.loading = false;
      state.user = action.payload;
    },
    getDetailFailed: (state: IUserState) => {
      state.getDetail.loading = false;
    },
  },
});

export const { getDetailStart, getDetailSuccess, getDetailFailed } =
  userSlice.actions;
export default userSlice.reducer;
