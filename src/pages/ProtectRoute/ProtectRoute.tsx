import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

import { RootState } from "../../redux/store.ts";
import { getUserDetail } from "../../services/user-service.ts";
import { isObjectEmpty } from "../../utils/function.tsx";

function ProtectRoute() {
  const token = useSelector((state: RootState) => state.auth.token);
  const user = useSelector((state: RootState) => state.user.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/auth/sign-in");
    }
  }, [token, navigate]);

  useEffect(() => {
    if (isObjectEmpty(user) && token) {
      getUserDetail(dispatch, token);
    }
  }, [dispatch, token, user, navigate]);

  return (
    <>
      <Outlet />
    </>
  );
}

export default ProtectRoute;
