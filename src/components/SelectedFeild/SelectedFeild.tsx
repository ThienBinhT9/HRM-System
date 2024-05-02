import React, { memo } from "react";
import { Select, SelectProps } from "antd";

import "./SelectedFeild.scss";

interface Props extends SelectProps {
  label?: string;
  direction_box?: "horizontal" | "vertical";
  className?: string;
  required?: boolean;
  message_error?: string;
  touched?: boolean;
  options?: SelectProps["options"];
}

function SelectedFeild(props: Props) {
  const {
    label,
    touched,
    options,
    className,
    message_error,
    required = false,
    direction_box = "horizontal",
  } = props;

  return (
    <div className={`wrapper__selectedFeild ${direction_box}`}>
      <label className="selectedFeild__label">
        {label}
        {required && <span style={{ color: "red" }}>*</span>}
      </label>
      <div
        className={`selectedFeild__sub ${
          message_error && touched ? "error" : ""
        }`}
      >
        <Select
          className={`selectedFeild__select ${className}`}
          options={options}
          {...props}
        />
        {message_error && touched && (
          <span className="selectFeild__err">{message_error}</span>
        )}
      </div>
    </div>
  );
}

export default memo(SelectedFeild);
