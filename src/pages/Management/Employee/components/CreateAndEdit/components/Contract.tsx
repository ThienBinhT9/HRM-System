import React, { memo } from "react";
import { Card } from "antd";

import { EMPLOYEE_TYPE } from "../../../../../../constant/common.ts";

import InputFeild from "../../../../../../components/InputFeild/InputFeild.tsx";
import SelectedFeild from "../../../../../../components/SelectedFeild/SelectedFeild.tsx";

function Contract({ formik }) {
  return (
    <Card
      className="create__card"
      title="Contract Infomation"
      extra={<p>{"Required(*)"}</p>}
    >
      <InputFeild
        label="Date Start"
        required
        id="contract_start_date"
        onBlur={formik.handleBlur}
        type="date"
        message_err={formik.errors.contract_start_date}
        touched={formik.touched.contract_start_date}
        value={formik.values.contract_start_date}
        onChange={formik.handleChange}
      />
      <SelectedFeild
        label="Employee Type"
        required
        id="type"
        onBlur={formik.handleBlur}
        placeholder="Choose Type"
        options={EMPLOYEE_TYPE}
        message_error={formik.errors.type}
        touched={formik.touched.type}
        value={formik.values.type}
        onChange={(e) => formik.setFieldValue("type", e)}
      />
    </Card>
  );
}

export default memo(Contract);
