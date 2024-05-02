import React from "react";

export interface IRoute {
  path: string;
  element: () => React.JSX.Element;
  children?: Array<IRoute>;
  layout?: ({ children }: { children: any }) => React.JSX.Element;
}

export interface IFactory {
  value: number;
  label: string;
}

export interface IGender {
  value: string;
  label: string;
}

export interface IMenuItem {
  label: string;
  key: React.Key;
  icon?: React.ReactNode;
  children?: Array<IMenuItem>;
}

export interface IColumnsParams {
  [key: string]: any;
}

export interface ISearchQuery {
  search?: string;
  page?: number;
}

export interface IDepartment {
  id: string;
  name: string;
  code: string;
  company_id: number;
  created_at: string;
  updated_at: string;
}

export interface IPosition {
  id: string;
  name: string;
  code: string;
  company_id: number;
  created_at: string;
  updated_at: string;
}

export interface IBenefit {
  id: number;
  name: string;
  type: string;
  value: string | null;
  code: string;
  company_id: number;
  created_at: string;
  updated_at: string;
}

export interface IGrade {
  id: number;
  name: string;
  prefix: string;
  company_id: number;
  created_at: string;
  updated_at: string;
  benefits: Array<IBenefit>;
}

export interface IMarriage {
  id: number;
  name: string;
  code: string;
  company_id: number;
  created_at: string;
  updated_at: string;
}

export interface ISelect {
  value: string;
  label: string;
  disable?: boolean;
}

export interface IDocument {
  id: number;
  document: string;
  created_at: string;
  employee_id: number;
  updated_at: string | null;
}

export interface ICompany {
  address: string;
  created_at: string;
  full_name: string;
  id: number;
  mail: string;
  name: string;
  place: string;
  prefix: string;
  tel_no: string;
  updated_at: string;
}
