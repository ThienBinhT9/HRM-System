import * as yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../../redux/store.ts";
import { login } from "../../../services/auth-service.ts";
import { formatOptionSelect } from "../../../utils/function.tsx";
import { ILoginParams } from "../../../interfaces/auth-interface.ts";
import { getOptionsCompany } from "../../../services/common-service.ts";
import {
  TEXT_MIN,
  TEXT_MAX,
  TEXT_REQUIRED_INPUT,
  TEXT_REQUIRED_SELECT,
} from "../../../constant/validateInput.ts";

import Button from "../../../components/Button/Button.tsx";
import BarLoading from "../../../components/Loading/Bar.tsx";
import InputFeild from "../../../components/InputFeild/InputFeild.tsx";
import SelectedFeild from "../../../components/SelectedFeild/SelectedFeild.tsx";

function LoginForm() {
  const { loading, message } = useSelector(
    (state: RootState) => state.auth.login
  );
  const { company } = useSelector((state: RootState) => state.common);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isMesServer, setIsMesServer] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      company_id: null,
    },
    validationSchema: yup.object({
      username: yup
        .string()
        .required(TEXT_REQUIRED_INPUT("name"))
        .max(30, TEXT_MAX(30)),
      password: yup
        .string()
        .required(TEXT_REQUIRED_INPUT("password"))
        .min(8, TEXT_MIN(8))
        .max(16, TEXT_MAX(16)),
      company_id: yup.number().required(TEXT_REQUIRED_SELECT("factory")),
    }),
    onSubmit: (values: ILoginParams) => {
      // Gọi API login
      login(dispatch, navigate, values);
      setIsMesServer(true);
    },
  });

  //Xử lý khi ấn phím Enter thì Submit
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      formik.handleSubmit();
    }
    if (e.key === " ") {
      e.preventDefault();
    }
  };

  //Khi component được mount thì sẽ gọi api options company
  useEffect(() => {
    getOptionsCompany(dispatch);
  }, [dispatch]);

  return (
    <div className="auth-form">
      {loading && <BarLoading loading={loading} />}
      <InputFeild
        id="username"
        label="Username"
        direction="vertical"
        value={formik.values.username}
        message_err={formik.errors.username}
        touched={formik.touched.username}
        onKeyDown={handleKeyPress}
        onChange={(e) => {
          formik.handleChange(e);
          setIsMesServer(false);
        }}
      />
      <InputFeild
        typePassword
        id="password"
        label="Password"
        direction="vertical"
        value={formik.values.password}
        message_err={formik.errors.password}
        touched={formik.touched.password}
        onKeyDown={handleKeyPress}
        onChange={(e) => {
          formik.handleChange(e);
          setIsMesServer(false);
        }}
      />
      <SelectedFeild
        id="factory"
        label="Factory"
        value={formik.values.company_id}
        touched={formik.touched.company_id}
        message_error={formik.errors.company_id}
        direction_box="vertical"
        placeholder="Select Factory"
        onChange={(e) => formik.setFieldValue("company_id", e)}
        options={formatOptionSelect(company, "name", "id")}
        loading={company.length < 1}
      />
      {message && isMesServer && <p className="auth-err-server">{message}</p>}
      <Button
        loading={loading}
        disabled={loading}
        type="primary"
        block
        size="large"
        onClick={(e) => formik.handleSubmit()}
      >
        Sign in
      </Button>
      <Button type="link" to="/auth/forgot-password" block>
        Forgot your password?
      </Button>
    </div>
  );
}

export default LoginForm;
