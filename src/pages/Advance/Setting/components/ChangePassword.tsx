import React from "react";
import { Card } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../../../redux/store.ts";
import { IChangePassword } from "../../../../interfaces/auth-interface.ts";
import { changePassword } from "../../../../services/auth-service.ts";

import InputFeild from "../../../../components/InputFeild/InputFeild.tsx";
import Button from "../../../../components/Button/Button.tsx";

function ChangePassword() {
  const token = useSelector((state: RootState) => state.auth.token);
  const { loading } = useSelector(
    (state: RootState) => state.auth.reset_password
  );

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      password: "",
      password_confirmation: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().required("Please enter password"),
      password_confirmation: Yup.string()
        .required("Please enter confirm password")
        .oneOf([Yup.ref("password")], "The passwords do not match"),
    }),
    onSubmit: (values: IChangePassword) => {
      changePassword(dispatch, token, values);
    },
  });

  return (
    <div className="wrapper-changePassword">
      <Card title="Change Password">
        <div className="card__inner">
          <InputFeild
            typePassword
            id="password"
            direction="vertical"
            label="New Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            message_err={formik.errors.password}
            touched={formik.touched.password}
            onBlur={formik.handleBlur}
          />
          <InputFeild
            typePassword
            id="password_confirmation"
            label="Confirm Password"
            direction="vertical"
            value={formik.values.password_confirmation}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            message_err={formik.errors.password_confirmation}
            touched={formik.touched.password_confirmation}
          />
          <Button
            type="primary"
            size="large"
            block
            loading={loading}
            disabled={loading}
            onClick={(e) => formik.handleSubmit()}
          >
            Confirm
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default ChangePassword;
