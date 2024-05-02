import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  REGEX_EMAIL,
  TEXT_EMAIL_FORMAT,
  TEXT_REQUIRED_INPUT,
} from "../../../constant/validateInput.ts";
import { RootState } from "../../../redux/store.ts";
import { forgot_pasword } from "../../../services/auth-service.ts";

import Button from "../../../components/Button/Button.tsx";
import InputFeild from "../../../components/InputFeild/InputFeild.tsx";

function ForgotForm() {
  const { loading } = useSelector(
    (state: RootState) => state.auth.forgot_password
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .required(TEXT_REQUIRED_INPUT("your email"))
        .matches(REGEX_EMAIL, TEXT_EMAIL_FORMAT),
    }),
    onSubmit: (values) => {
      forgot_pasword(dispatch, values);
    },
  });

  return (
    <div className="auth-form">
      <InputFeild
        id="email"
        type="email"
        direction="vertical"
        label="Your work Email"
        message_err={formik.errors.email}
        touched={formik.touched.email}
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <Button
        type="primary"
        onClick={(e) => formik.handleSubmit()}
        block
        loading={loading}
        disabled={loading}
        size="large"
      >
        Confirm & Send OTP
      </Button>
      <Button to="/auth/sign-in" block type="link">
        Back to Sign in
      </Button>
    </div>
  );
}

export default ForgotForm;
