import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../../../../redux/store.ts";
import { copyValues2 } from "../../../../../utils/function.tsx";
import {
  createEmployee,
  getEmployeeById,
  updateEmployee,
} from "../../../../../services/employee-service.ts";
import {
  getOptionsMarriage,
  getOptionsDepartment,
  getOptionsPosition,
  getOptionsGrade,
  getOptionsBenefit,
} from "../../../../../services/common-service.ts";
import {
  TABS,
  initEmployee,
} from "../../../../../constant/employee-constant.ts";
import {
  TEXT_REQUIRED_INPUT,
  TEXT_REQUIRED_SELECT,
} from "../../../../../constant/validateInput.ts";

import "./CreateOrUpdate.scss";
import Others from "./components/Others.tsx";
import Details from "./components/Details.tsx";
import Contract from "./components/Contract.tsx";
import Infomation from "./components/Infomation.tsx";
import SalaryWages from "./components/Salary_Wages.tsx";
import Title from "../../../../../components/Title/Title.tsx";
import Button from "../../../../../components/Button/Button.tsx";
import BreadCrumb from "../../../../../components/Breadcrumb/Breadcrumb.tsx";

function CreateEmployee() {
  const token = useSelector((state: RootState) => state.auth.token);
  const { create, update, upload } = useSelector(
    (state: RootState) => state.employee
  );

  const { key } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [tabActive, setTabActive] = useState("info");
  const [tabError, setTabError] = useState<Array<string>>([]);

  const formik = useFormik({
    initialValues: { ...initEmployee },
    validateOnMount: true,
    validationSchema: Yup.object({
      name: Yup.string().required(TEXT_REQUIRED_INPUT("name")),
      gender: Yup.string().required(TEXT_REQUIRED_SELECT("gender")),
      dob: Yup.date().required(TEXT_REQUIRED_INPUT("dob")),
      ktp_no: Yup.string().required(TEXT_REQUIRED_INPUT("KTP No")),
      type: Yup.string().required(TEXT_REQUIRED_INPUT("name")),
      contract_start_date: Yup.string().required(
        TEXT_REQUIRED_INPUT("Start date")
      ),
    }),
    onSubmit: (values) => {},
  });

  //Khi click sẽ tạo mới employee và nếu có document thì sẽ upload document
  const handleSubmit = async () => {
    if (key) {
      const body = { ...formik.values, id: Number(key) };
      await updateEmployee(dispatch, navigate, token, body, key);
    } else {
      await createEmployee(dispatch, navigate, token, { ...formik.values });
    }
  };

  const handleChangeTab = (key: string) => {
    setTabActive(key);
    if (key === tabActive) return;
    const { name, gender, dob, ktp_no, type, contract_start_date } =
      formik.errors;
    if (key !== "info") {
      if (name || gender || dob || ktp_no) {
        setTabError((prev) => {
          if (prev.includes("info")) return prev;
          return [...prev, "info"];
        });
      } else {
        const validTab = tabError.filter((tab) => tab !== "info");
        setTabError(validTab);
      }
    }
    if (key !== "contract") {
      if (type || contract_start_date) {
        setTabError((prev) => {
          if (prev.includes("contract")) return prev;
          return [...prev, "contract"];
        });
      } else {
        const validTab = tabError.filter((tab) => tab !== "contract");
        setTabError(validTab);
      }
    }
  };

  //Khi componnet mount thì gọi các options select
  useEffect(() => {
    Promise.all([
      getOptionsMarriage(token, dispatch),
      getOptionsDepartment(token, dispatch),
      getOptionsPosition(token, dispatch),
      getOptionsGrade(token, dispatch),
      getOptionsBenefit(token, dispatch),
    ]);
  }, [token, dispatch]);

  //Khi component mount thì gọi employee theo id
  useEffect(() => {
    if (key) {
      const fetchEmployee = async () => {
        const data = await getEmployeeById(dispatch, token, key);
        formik.setValues(copyValues2(data, { ...initEmployee }));
      };
      fetchEmployee();
    }
  }, [key, dispatch, token]);

  return (
    <div className="wrapper-createEmployee">
      <BreadCrumb
        root="General"
        last={key ? "Edit Employee" : "Add new Employee"}
      />
      <Title
        button={key ? "Save Change" : "Add"}
        btnLoading={create.loading || update.loading || upload.loading}
        onSubmit={handleSubmit}
        btnDisabled={
          !formik.isValid || create.loading || update.loading || upload.loading
        }
      />
      <div className="tab-btns">
        {TABS.map((tab) => {
          return (
            <Button
              size="large"
              key={tab.key}
              type={tabActive === tab.key ? "primary" : "text"}
              danger={tabError.includes(tab.key)}
              onClick={() => handleChangeTab(tab.key)}
            >
              {tab.label}
            </Button>
          );
        })}
      </div>
      {tabActive === "info" && <Infomation formik={formik} />}
      {tabActive === "contract" && <Contract formik={formik} />}
      {tabActive === "detail" && <Details formik={formik} />}
      {tabActive === "salary" && <SalaryWages formik={formik} />}
      {tabActive === "other" && <Others formik={formik} />}
    </div>
  );
}

export default CreateEmployee;
