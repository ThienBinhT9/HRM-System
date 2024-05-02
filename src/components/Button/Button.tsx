import React from "react";
import { NavLink } from "react-router-dom";

import { Button, ButtonProps } from "antd";

import "./Button.scss";

interface Props extends ButtonProps {
  to?: string;
  className?: string;
}

const ButtonCustom = (props: Props) => {
  const { to, children, className, ...passProps } = props;

  return to ? (
    <NavLink to={to}>
      <Button className={`wrapper__button ${className}`} {...passProps}>
        {children}
      </Button>
    </NavLink>
  ) : (
    <Button className={`wrapper__button ${className}`} {...passProps}>
      {children}
    </Button>
  );
};

export default ButtonCustom;
