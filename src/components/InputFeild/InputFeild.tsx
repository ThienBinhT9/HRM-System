import React, { memo } from "react";
import { Input, InputProps } from "antd";

import "./InputFeild.scss";

interface Props extends InputProps {
  label?: string;
  typePassword?: boolean;
  message_err?: string;
  className?: string;
  touched?: boolean;
  direction?: "horizontal" | "vertical" | "reverse";
}

const InputFeild = (props: Props) => {
  const {
    label,
    typePassword,
    className,
    message_err,
    required,
    touched,
    direction = "horizontal",
    ...passProps
  } = props;

  return (
    <div className={`wrapper-inputFeild ${direction}`}>
      {label && (
        <label className="label">
          {label}
          {required && <span style={{ color: "red" }}>*</span>}
        </label>
      )}
      <div
        className={`inputFeild__sub ${message_err && touched ? "error" : ""}`}
      >
        {typePassword ? (
          <Input.Password className={`input ${className}`} {...passProps} />
        ) : (
          <Input {...passProps} />
        )}
        {message_err && touched && (
          <span className="inputFeild-err">{message_err}</span>
        )}
      </div>
    </div>
  );
};

export default memo(InputFeild);
