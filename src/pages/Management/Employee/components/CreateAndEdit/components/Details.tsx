import { Card } from "antd";
import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../../../../../redux/store.ts";
import { formatOptionSelect } from "../../../../../../utils/function.tsx";

import InputFeild from "../../../../../../components/InputFeild/InputFeild.tsx";
import SelectedFeild from "../../../../../../components/SelectedFeild/SelectedFeild.tsx";

function Details({ formik }) {
  const { department, position } = useSelector(
    (state: RootState) => state.common
  );

  return (
    <Card
      className="create__card"
      title="Employment Details"
      extra={<p>{"Required(*)"}</p>}
    >
      <div className="create__inner">
        <div className="section__inner">
          <SelectedFeild
            allowClear
            id="department_id"
            label="Department"
            placeholder="Choose Department"
            loading={department.length < 1}
            value={formik.values.department_id}
            options={formatOptionSelect(department, "name", "id")}
            onChange={(e) => {
              formik.setFieldValue("department_id", e);
            }}
          />
          <SelectedFeild
            allowClear
            id="position_id"
            label="Position"
            loading={position.length < 1}
            placeholder="Choose Position"
            value={formik.values.position_id}
            options={formatOptionSelect(position, "name", "id")}
            onChange={(e) => {
              formik.setFieldValue("position_id", e);
            }}
          />
          <InputFeild
            id="hidden_on_payroll"
            type="checkbox"
            direction="reverse"
            label="Hide on payroll"
            checked={formik.values.hidden_on_payroll === "1"}
            onChange={(e) => {
              const newValue = e.target.checked ? "1" : "0";
              formik.setFieldValue("hidden_on_payroll", newValue);
            }}
          />
          <InputFeild
            id="entitle_ot"
            type="checkbox"
            label="Entitled OT"
            direction="reverse"
            checked={formik.values.entitle_ot}
            onChange={formik.handleChange}
          />
          <InputFeild
            id="meal_allowance_paid"
            type="checkbox"
            direction="reverse"
            label="Meal Allowance Paid"
            checked={formik.values.meal_allowance_paid}
            onChange={formik.handleChange}
          />
          <InputFeild
            disabled
            checked
            direction="reverse"
            label="Operational Allowance Paid"
            type="checkbox"
          />
          <InputFeild
            disabled
            checked
            direction="reverse"
            label="Attendance Allowance Paid"
            type="checkbox"
          />
        </div>
      </div>
    </Card>
  );
}

export default Details;
