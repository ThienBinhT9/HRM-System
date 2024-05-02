import type { TableColumnsType } from "antd";
import { IColumnsParams } from "../interfaces/common-interface";

export const COLUMNS_RECORD: TableColumnsType<IColumnsParams> = [
  {
    title: "NIK",
    dataIndex: "staff_id",
    ellipsis: true,
    width: 95,
  },
  {
    title: "Name",
    dataIndex: "name",
    ellipsis: true,
    width: 150,
  },
  {
    title: "Gender",
    dataIndex: "gender",
    width: 70,
    ellipsis: true,
  },
  {
    title: "Marriage Status",
    dataIndex: "marriage_code",
    width: 130,
    ellipsis: true,
  },
  {
    title: "Mother Name",
    dataIndex: "mother_name",
    width: 150,
    ellipsis: true,
  },
  {
    title: "Tax ID",
    dataIndex: "nc_id",
    width: 170,
    ellipsis: true,
  },
  {
    title: "Date Start",
    dataIndex: "created_at",
    width: 90,
    ellipsis: true,
  },
  {
    title: "Department",
    dataIndex: "department_name",
    width: 150,
    ellipsis: true,
  },
  {
    title: "Position",
    dataIndex: "position_name",
    width: 150,
    ellipsis: true,
  },
  {
    title: "KTP No.",
    dataIndex: "ktp_no",
    width: 130,
    ellipsis: true,
  },
  {
    title: "Mobile No.",
    dataIndex: "mobile_no",
    width: 130,
    ellipsis: true,
  },
  {
    title: "Tel No.",
    dataIndex: "tel_no",
    width: 85,
    ellipsis: true,
  },
  {
    title: "Entitled OT",
    dataIndex: "entitled_ot	",
    width: 100,
    ellipsis: true,
  },
  {
    title: "Resigned",
    dataIndex: "resign_reason",
    width: 120,
    ellipsis: true,
  },
  {
    title: "Grading",
    dataIndex: "grade_name",
    width: 80,
    ellipsis: true,
  },
  {
    title: "Old NIK",
    dataIndex: "old_staff_id",
    width: 95,
    ellipsis: true,
  },
];

export const COLUMNS_DOCUMENT_OTHER: TableColumnsType<IColumnsParams> = [
  {
    title: "No",
    dataIndex: "no",
    ellipsis: true,
    width: 50,
    align: "center",
  },
  {
    title: "Document Name",
    dataIndex: "document_name",
    ellipsis: true,
    width: 345,
    align: "center",
  },
  {
    title: "Created At",
    dataIndex: "created_at",
    ellipsis: true,
    width: 345,
    align: "center",
  },
  {
    title: "Action",
    dataIndex: "action",
    ellipsis: true,
    width: 345,
    align: "center",
  },
];

export const initEmployee = {
  staff_id: "",
  name: "",
  gender: null,
  mother_name: "",
  dob: "",
  pob: "",
  ktp_no: "",
  nc_id: "",
  home_address_1: "",
  home_address_2: "",
  mobile_no: "",
  tel_no: "",
  marriage_id: null,
  card_number: "",
  bank_account_no: "",
  bank_name: "",
  family_card_number: "",
  safety_insurance_no: "",
  health_insurance_no: "",
  education_background: "",
  emergency_name: "",
  emergency_relationship: "",
  emergency_contract: "",

  //Contract
  type: null,
  contract_start_date: "",
  employee_first_contracts: { start: "", end: "" },
  employee_extension_contracts: { start: "", end: "" },
  contracts: [],

  //Details
  position_id: null,
  department_id: null,
  hidden_on_payroll: "0",
  entitle_ot: false,
  meal_allowance_paid: false,
  operational_allowance_paid: true,
  attendance_allowance_paid: true,

  //Salary & Wages
  basic_salary: "",
  audit_salary: "",
  safety_insurance: "",
  health_insurance: "",
  safety_insurance_audit: "",
  health_insurance_audit: "",
  meal_allowance: "",

  //Other
  remark: "",
  benefits: [],
  documents: [],
  grade_id: null,
  deleted_ids: [],
  document_upload: [],
  account_user_id: null,
};

export const TABS = [
  { label: "Employee Infomation", key: "info" },
  { label: "Employee Contract", key: "contract" },
  { label: "Employment Details", key: "detail" },
  { label: "Salary & Wages", key: "salary" },
  { label: "Others", key: "other" },
];
