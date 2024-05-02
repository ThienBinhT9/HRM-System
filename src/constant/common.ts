import {
  Employee_managmentIcon,
  Attendance_managamentIcon,
  Leave_managamentIcon,
  Payroll_managamentIcon,
  User_managamentIcon,
  Master_managamentIcon,
  globalIcon,
  settingsIcon,
} from "../assets/icons/icon.tsx";

export const TEXT_NAME_PROJECT = "HR Management System";

export const GENDER = [
  { value: 0, label: "Male" },
  { value: 1, label: "Famale" },
];

export const EMPLOYEE_TYPE = [
  { value: 0, label: "Permanent" },
  { value: 1, label: "Part-time" },
  { value: 2, label: "Contract" },
];

export const MENU_DATA = [
  { label: "General", key: "general", disabled: true },
  {
    label: "Attendance Management",
    key: "/attendance",
    icon: Attendance_managamentIcon(),
  },
  { label: "Leave Management", key: "/leave", icon: Leave_managamentIcon() },
  {
    label: "Payroll Management",
    key: "/payroll",
    icon: Payroll_managamentIcon(),
  },
  {
    label: "Employee Management",
    key: "/employee",
    icon: Employee_managmentIcon(),
  },
  { label: "User Management", key: "user", icon: User_managamentIcon() },
  {
    label: "Master Management",
    key: "/master",
    icon: Master_managamentIcon(),
    children: [
      { label: "Employee Grading", key: "employee-grading" },
      { label: "Benefit Setup", key: "benefit-setup" },
      { label: "Leave Setup", key: "leave-setup" },
      { label: "Department", key: "department" },
    ],
  },
  // { type: "divider" },
  { label: "Advance", key: "advance", disabled: true },
  {
    label: "Global Settings",
    key: "/global-settings",
    icon: globalIcon(),
    children: [
      { label: "Minium Wages", key: "" },
      { label: "Employee Allowance", key: "minium-wages" },
      { label: "Safety Insurance", key: "safety-insurance" },
      { label: "Health Insurance", key: "health-insurance" },
      { label: "Public Holiday", key: "public-holiday" },
      { label: "OT Configure", key: "ot-configure" },
      { label: "Working Hour", key: "working-hour" },
      { label: "Other Default", key: "other-default" },
    ],
  },
  {
    label: "Settings",
    key: "/settings",
    icon: settingsIcon(),
  },
];
