import { Outlet } from "react-router-dom";
import React from "react";

function Employee() {
  return (
    <div className="wrapper-employee">
      <Outlet />
    </div>
  );
}

export default Employee;
