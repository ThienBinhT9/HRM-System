import { Card } from "antd";
import { Table, Upload } from "antd";
import { useSelector } from "react-redux";
import { UploadOutlined } from "@ant-design/icons";
import React, { memo, useCallback, useState } from "react";

import {
  formatDocument,
  formatOptionSelect,
  getIdsBenefits,
} from "../../../../../../utils/function.tsx";
import { RootState } from "../../../../../../redux/store.ts";
import { COLUMNS_DOCUMENT_OTHER } from "../../../../../../constant/employee-constant.ts";

import Button from "../../../../../../components/Button/Button.tsx";
import InputFeild from "../../../../../../components/InputFeild/InputFeild.tsx";
import SelectedFeild from "../../../../../../components/SelectedFeild/SelectedFeild.tsx";

function Others({ formik }) {
  const { grade, benefits } = useSelector((state: RootState) => state.common);

  const [documents, setDocuments] = useState(formik.values.documents);

  //Khi click upload chọn file sẽ thêm vào documents
  const handleChooseFile = (file: File) => {
    setDocuments((prev) => {
      if (prev.find((_file) => _file.name === file.name) || prev.length >= 10)
        return prev;
      formik.values.document_upload = [...formik.values.document_upload, file];
      return [...prev, file];
    });
    return false;
  };

  //Click vào thùng rác sẽ loại bỏ item ra khỏi bảng document và thêm id của document đã có trước đó vào
  const handleRemoveFile = (key: number, doc) => {
    setDocuments((prev) => prev.filter((item, index: number) => index !== key));
    formik.values.document_upload = [
      ...formik.values.document_upload?.filter(
        (file: File) => file.name !== doc.name
      ),
    ];
    if (doc.id) {
      formik.values.deleted_ids = [...formik.values.deleted_ids, doc.id];
    }
  };

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    formik.setFieldValue(id, value);
  }, []);

  return (
    <Card className="create__card" title="Others">
      <div className="create__inner">
        <div className="other__inner">
          <div className="section__inner">
            <SelectedFeild
              id="grade_id"
              label="Grade"
              value={formik.values.grade_id}
              options={formatOptionSelect(grade, "name", "id")}
              onChange={(e) => formik.setFieldValue("grade_id", e)}
            />
            <SelectedFeild
              allowClear
              id="benefits"
              mode="multiple"
              label="Benefit"
              value={getIdsBenefits(formik.values.benefits)}
              options={formatOptionSelect(benefits, "name", "id")}
              onChange={(e) => formik.setFieldValue("benefits", e)}
            />
            <InputFeild
              id="remark"
              label="Remark"
              direction="horizontal"
              value={formik.values.remark}
              onChange={handleChange}
            />
            <InputFeild
              label="HRM User Account"
              direction="horizontal"
              disabled
            />
          </div>
          <div className="card__inner__boxshadow">
            <div className="subcard__header">
              <p>Document</p>
              <Upload
                multiple
                maxCount={10}
                disabled={documents.length >= 10}
                showUploadList={false}
                accept=".jpg, .jpeg, .png, .pdf, .csv, .xlsx, .docx"
                beforeUpload={handleChooseFile}
              >
                <Button
                  type="text"
                  icon={<UploadOutlined />}
                  disabled={documents.length >= 10}
                >
                  Upload
                </Button>
              </Upload>
            </div>
            <div style={{ width: "100%", overflow: "scroll" }}>
              <Table
                columns={COLUMNS_DOCUMENT_OTHER}
                dataSource={formatDocument(documents, handleRemoveFile)}
                pagination={false}
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default memo(Others);
