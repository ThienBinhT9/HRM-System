import { Card } from "antd";
import { useSelector } from "react-redux";
import React, { memo, useCallback } from "react";

import { GENDER } from "../../../../../../constant/common.ts";
import { RootState } from "../../../../../../redux/store.ts";
import { formatOptionSelect } from "../../../../../../utils/function.tsx";

import InputFeild from "../../../../../../components/InputFeild/InputFeild.tsx";
import SelectedFeild from "../../../../../../components/SelectedFeild/SelectedFeild.tsx";

function Infomation({ formik }) {
  const { marriage } = useSelector((state: RootState) => state.common);
  const { loading } = useSelector((state: RootState) => state.employee.getById);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    formik.setFieldValue(id, value);
  }, []);

  return (
    <Card
      loading={loading}
      className="create__card"
      title="Personal Infomation"
      extra={<p>{"Required(*)"}</p>}
    >
      <div className="create__inner">
        <div className="inner__half">
          {formik.values.staff_id && (
            <InputFeild disabled label="NIK" value={formik.values.staff_id} />
          )}
          <InputFeild
            id="name"
            label="Name"
            required
            message_err={formik.errors.name}
            touched={formik.touched.name}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            onChange={handleChange}
          />
          <SelectedFeild
            id="gender"
            label="Gender"
            placeholder="Choose Gender"
            required
            options={GENDER}
            onBlur={formik.handleBlur}
            message_error={formik.errors.gender}
            touched={formik.touched.gender}
            value={formik.values.gender}
            onChange={(e) => formik.setFieldValue("gender", e)}
          />
          <InputFeild
            id="mother_name"
            label="Mother Name"
            value={formik.values.mother_name}
            onChange={handleChange}
          />
          <InputFeild
            id="dob"
            required
            type="date"
            label="Date of birth"
            message_err={formik.errors.dob}
            touched={formik.touched.dob}
            value={formik.values.dob}
            onBlur={formik.handleBlur}
            onChange={handleChange}
          />
          <InputFeild
            id="pob"
            label="Place of birth"
            value={formik.values.pob}
            onChange={handleChange}
          />
          <InputFeild
            id="ktp_no"
            label="KTP No."
            required
            message_err={formik.errors.ktp_no}
            touched={formik.touched.ktp_no}
            onBlur={formik.handleBlur}
            value={formik.values.ktp_no}
            onChange={handleChange}
          />
          <InputFeild
            id="nc_id"
            label="Tax ID"
            value={formik.values.nc_id}
            onChange={handleChange}
          />
          <InputFeild
            id="home_address_1"
            label="Home Address 1"
            value={formik.values.home_address_1}
            onChange={handleChange}
          />
          <InputFeild
            id="home_address_2"
            label="Home Address 2"
            value={formik.values.home_address_2}
            onChange={handleChange}
          />
          <InputFeild
            id="mobile_no"
            label="Mobile No."
            type="number"
            value={formik.values.mobile_no}
            onChange={handleChange}
          />
          <InputFeild
            id="tel_no"
            label="Tel No."
            type="number"
            value={formik.values.tel_no}
            onChange={handleChange}
          />
        </div>
        <div className="inner__half">
          <SelectedFeild
            allowClear
            id="marriage_id"
            label="Marriage Status"
            placeholder="Choose Marriage Status"
            value={formik.values.marriage_id}
            onChange={(e) => formik.setFieldValue("marriage_id", e)}
            options={formatOptionSelect(marriage, "name", "id")}
          />
          <InputFeild
            type="number"
            id="card_number"
            label="Bank Card No."
            value={formik.values.card_number}
            onChange={handleChange}
          />
          <InputFeild
            type="number"
            id="bank_account_no"
            label="Bank Account No."
            value={formik.values.bank_account_no}
            onChange={handleChange}
          />
          <InputFeild
            id="bank_name"
            label="Bank Name"
            value={formik.values.bank_name}
            onChange={handleChange}
          />
          <InputFeild
            id="family_card_number"
            type="number"
            label="Family Card Number"
            value={formik.values.family_card_number}
            onChange={handleChange}
          />
          <InputFeild
            id="safety_insurance_no"
            label="Safety Insurance No."
            value={formik.values.safety_insurance_no}
            onChange={handleChange}
          />
          <InputFeild
            id="education_background"
            label="Education Background"
            value={formik.values.education_background}
            onChange={handleChange}
          />
          <div className="card__inner__boxshadow">
            <p>Emergency Contact Info</p>
            <InputFeild
              id="emergency_name"
              label="Name"
              value={formik.values.emergency_name}
              onChange={handleChange}
            />
            <InputFeild
              id="emergency_relationship"
              label="Relationship"
              value={formik.values.emergency_relationship}
              onChange={handleChange}
            />
            <InputFeild
              id="emergency_contract"
              label="Contact"
              value={formik.values.emergency_contract}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default memo(Infomation);
