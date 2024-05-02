//page
import Auth from "../pages/Auth/Auth.tsx";
import Login from "../pages/Auth/components/Login.tsx";
import ResetPassword from "../pages/Auth/components/ResetPassword.tsx";
import ForgotPassword from "../pages/Auth/components/ForgotPasswrod.tsx";

import Setting from "../pages/Advance/Setting/Setting.tsx";
import ChangePassword from "../pages/Advance/Setting/components/ChangePassword.tsx";
import CompanyInfomation from "../pages/Advance/Setting/components/CompanyInfomation.tsx";

import Home from "../pages/Home/Home.tsx";
import User from "../pages/Management//User/User.tsx";
import Leave from "../pages/Management//Leave/Leave.tsx";
import Master from "../pages/Management//Master/Master.tsx";
import Payroll from "../pages/Management//Payroll/Payroll.tsx";
import Employee from "../pages/Management//Employee/Employee.tsx";
import Attendance from "../pages/Management//Attendance/Attendance.tsx";
import RecordEmployee from "../pages/Management/Employee/components/Record/Record.tsx";
import CreateOrUpdateEmployee from "../pages/Management/Employee/components/CreateAndEdit/CreateOrUpdate.tsx";

//layout
import MainLayout from "../layouts/MainLayout/MainLayout.tsx";
import ContentLayout from "../layouts/ContentLayout/ContentLayout.tsx";

//interface
import { IRoute } from "../interfaces/common-interface.ts";

export const publicRouters: IRoute[] = [
  {
    path: "/auth",
    element: Auth,
    layout: ContentLayout,
    children: [
      { path: "sign-in", element: Login },
      { path: "forgot-password", element: ForgotPassword },
      { path: "reset-password", element: ResetPassword },
    ],
  },
];

export const privateRouters: IRoute[] = [
  {
    path: "/",
    element: Home,
    layout: MainLayout,
    children: [
      { path: "payroll", element: Payroll },
      { path: "user", element: User },
      { path: "leave", element: Leave },
      { path: "master", element: Master },
      { path: "attendance", element: Attendance },
      {
        path: "settings",
        element: Setting,
        children: [
          { path: "", element: CompanyInfomation },
          { path: "change-password", element: ChangePassword },
        ],
      },
      {
        path: "employee",
        element: Employee,
        children: [
          { path: "", element: RecordEmployee },
          { path: "create-or-update", element: CreateOrUpdateEmployee },
          { path: "create-or-update/:key", element: CreateOrUpdateEmployee },
        ],
      },
    ],
  },
];
