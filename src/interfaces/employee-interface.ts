export interface IEmployee {
  [key: string]: any;
}

export interface IEmployeeState {
  employees: IEmployee;
  getEmpoyee: {
    loading: boolean;
  };
  deleteE: {
    loading: boolean;
  };
  create: {
    loading: boolean;
  };
  update: {
    loading: boolean;
  };
  upload: {
    loading: boolean;
  };
  getById: {
    loading: boolean;
  };
}

export interface IEmployee2 {
  staff_id?: string;
  name: string;
  gender: number | null;
  mother_name: string;
  dob: string;
  pob: string;
  ktp_no: string;
  nc_id: string;
  home_address_1: string;
  home_address_2: string;
  mobile_no: string;
  tel_no: string;
  marriage_id: null;
  card_number: string;
  bank_account_no: string;
  bank_name: string;
  family_card_number: string;
  safety_insurance_no: string;
  health_insurance_no: string;
  education_background: string;
  emergency_name: string;
  emergency_relationship: string;
  emergency_contract: string;

  //Detail
  department_id: number | null;
  position_id: number | null;
  hidden_on_payroll: string;
  entitle_ot: boolean;
  meal_allowance_paid: boolean;
  operational_allowance_paid: boolean;
  attendance_allowance_paid: boolean;

  //Contract
  type: string | null;
  contract_start_date: string;
  employee_first_contracts: { start: string; end: string };
  employee_extension_contracts: { start: string; end: string };
  contracts: Array<object>;
}

export interface IEmployeeSalary {
  basic_salary: string;
  audit_salary: string;
  safety_insurance: string;
  health_insurance: string;
  safety_insurance_audit: string;
  health_insurance_audit: string;
  meal_allowance: string;
}

export interface IEmployeeOthers {
  remark: string;
  grade_id: number | null;
  account_user_id: string | null;
  benefits: Array<object>;
  deleted_ids: Array<number>;
  documents: Array<any>;
  document_upload: Array<any>;
}

export interface IEmployeeContract {
  type: string | null;
  contract_start_date: string;
  employee_first_contracts: { start: string; end: string };
  employee_extension_contracts: { start: string; end: string };
  contracts: Array<object>;
}
