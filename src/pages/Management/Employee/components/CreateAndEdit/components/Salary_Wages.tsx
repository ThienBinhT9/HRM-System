import { Card } from "antd";
import React, { useCallback } from "react";

import InputFeild from "../../../../../../components/InputFeild/InputFeild.tsx";

function Salary_Wages({ formik }) {
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    formik.setFieldValue(id, value);
  }, []);

  return (
    <Card className="create__card" title="Salary & Wages">
      <div className="create__inner">
        <div className="section__inner">
          <InputFeild
            id="basic_salary"
            prefix="Rp"
            type="number"
            label="Basic Salary"
            direction="horizontal"
            value={formik.values.basic_salary}
            min={0}
            onChange={handleChange}
          />
          <InputFeild
            id="audit_salary"
            prefix="Rp"
            type="number"
            label="Basic Salary (Audit)"
            direction="horizontal"
            min={0}
            value={formik.values.audit_salary}
            onChange={handleChange}
          />
          <InputFeild
            id="safety_insurance"
            prefix="Rp"
            type="number"
            label="Safety Insurance Amount"
            direction="horizontal"
            min={0}
            value={formik.values.safety_insurance}
            onChange={handleChange}
          />
          <InputFeild
            id="health_insurance"
            prefix="Rp"
            type="number"
            min={0}
            label="Healthy Insurance Amount"
            direction="horizontal"
            value={formik.values.health_insurance}
            onChange={handleChange}
          />
          <InputFeild
            id="safety_insurance_audit"
            prefix="Rp"
            type="number"
            label="Safety Insurance Amount (Audit)"
            direction="horizontal"
            min={0}
            value={formik.values.safety_insurance_audit}
            onChange={handleChange}
          />
          <InputFeild
            id="health_insurance_audit"
            prefix="Rp"
            type="number"
            label="Healthy Insurance Amount (Audit)"
            direction="horizontal"
            min={0}
            value={formik.values.health_insurance_audit}
            onChange={handleChange}
          />
          <InputFeild
            id="meal_allowance"
            prefix="Rp"
            type="number"
            label="Meal Allowance"
            direction="horizontal"
            min={0}
            value={formik.values.meal_allowance}
            onChange={handleChange}
          />
          <p className="">
            Note:
            <span>
              If leave empty, these fields will be calculated automatically by
              system
            </span>
          </p>
        </div>
      </div>
    </Card>
  );
}

export default Salary_Wages;
