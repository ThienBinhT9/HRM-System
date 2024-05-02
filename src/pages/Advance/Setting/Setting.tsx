import React from "react";
import { Outlet } from "react-router-dom";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb.tsx";

import "./Setting.scss";

const Setting = () => {
  return (
    <div className="wrapper__setting">
      <Breadcrumb root="General" />
      <h1 className="setting__title">Setting</h1>
      <Outlet />
    </div>
  );
};

export default Setting;
