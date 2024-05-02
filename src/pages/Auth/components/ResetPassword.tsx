import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import queryString from "query-string";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  TEXT_REQUIRED_INPUT,
  TEXT_PASSWORD_NOTMATCH,
} from "../../../constant/validateInput.ts";
import { RootState } from "../../../redux/store.ts";
import { resetPassword } from "../../../services/auth-service.ts";
import { IChangePassword } from "../../../interfaces/auth-interface.ts";

import Button from "../../../components/Button/Button.tsx";
import InputFeild from "../../../components/InputFeild/InputFeild.tsx";

function ResetPassword() {
  const queryStringObj = queryString.parse(window.location.search);

  const { loading } = useSelector(
    (state: RootState) => state.auth.reset_password
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      password: "",
      password_confirmation: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().required(TEXT_REQUIRED_INPUT("password")),
      password_confirmation: Yup.string()
        .required(TEXT_REQUIRED_INPUT("confirm password"))
        .oneOf([Yup.ref("password")], TEXT_PASSWORD_NOTMATCH),
    }),
    onSubmit: (values: IChangePassword) => {
      const body = {
        ...values,
        ...queryStringObj,
      };
      resetPassword(dispatch, navigate, body);
    },
  });

  return (
    <div className="auth-form">
      <InputFeild
        typePassword
        id="password"
        label="New Password"
        direction="vertical"
        value={formik.values.password}
        message_err={formik.errors.password}
        touched={formik.touched.password}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
      />
      <InputFeild
        typePassword
        id="password_confirmation"
        label="Confirm Password"
        direction="vertical"
        value={formik.values.password_confirmation}
        message_err={formik.errors.password_confirmation}
        touched={formik.touched.password_confirmation}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
      />
      <Button
        block
        type="primary"
        size="large"
        loading={loading}
        disabled={loading}
        onClick={() => formik.handleSubmit()}
      >
        Confirm
      </Button>
    </div>
  );
}

export default ResetPassword;
