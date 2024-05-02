import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import "./Auth.scss";
import logo from "../../assets/images/logo.png";
import { formatInput } from "../../utils/function.tsx";
import { TEXT_NAME_PROJECT } from "../../constant/common.ts";

function Auth() {
  const title = formatInput(useLocation().pathname.split("/")[2]);
  return (
    <div className="wrapper-auth">
      <div className="auth__header">
        <img src={logo} alt="logo" />
        <h1>{TEXT_NAME_PROJECT}</h1>
      </div>
      <h1 className="auth__title">{title}</h1>
      <div className="auth__content">
        <Outlet />
      </div>
    </div>
  );
}

export default Auth;
