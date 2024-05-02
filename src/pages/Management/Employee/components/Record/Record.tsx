import { Card, Table } from "antd";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteOutlined, FileAddOutlined } from "@ant-design/icons";

import "./Record.scss";
import {
  getListEmployee,
  deleteEmployee,
} from "../../../../../services/employee-service.ts";
import {
  decodeQuerySearch,
  formatDataEmployeeRecord,
} from "../../../../../utils/function.tsx";
import { RootState } from "../../../../../redux/store.ts";
import { ISearchQuery } from "../../../../../interfaces/common-interface.ts";
import { COLUMNS_RECORD } from "../../../../../constant/employee-constant.ts";

import Title from "../../../../../components/Title/Title.tsx";
import Modal from "../../../../../components/Modal/Modal.tsx";
import Button from "../../../../../components/Button/Button.tsx";
import EmptyData from "../../../../../components/EmptyData/EmptyData.tsx";
import Pagination from "../../../../../components/Pagination/Pagination.tsx";
import BreadCrumb from "../../../../../components/Breadcrumb/Breadcrumb.tsx";

function Employee() {
  const token = useSelector((state: RootState) => state.auth.token);
  const { getEmpoyee, employees, deleteE } = useSelector(
    (state: RootState) => state.employee
  );

  const { page, search }: ISearchQuery = decodeQuerySearch();

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [showModalDelete, setShowModalDelete] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Khi người dùng change ô checkbox sẽ thêm vào selectedRowKeys
  const handleRowChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  //Khi click vào dòng trên bảng sẽ thêm key của nó vào selectedRowKeys
  const handleRowClick = (key: number) => {
    setSelectedRowKeys((prev) => {
      if (!prev.includes(key)) return [...prev, key];
      return prev.filter((_key) => _key !== key);
    });
  };

  //Khi doubleclick sẽ chuyển tới trang update của employee đã click
  const handleRowDoubleClick = (key: number) => {
    navigate(`/employee/create-or-update/${key}`);
  };

  //Khi click sẽ gọi api xóa các row đã chọn và nếu thành công sẽ gọi lại list employee để render dữ liệu mới nhất
  const handleDelete = async () => {
    const status = await deleteEmployee(dispatch, token, selectedRowKeys);
    if (status === 200) getListEmployee(page, search, token, dispatch);
    setSelectedRowKeys([]);
    setShowModalDelete(false);
  };

  //Khi component mới được mount vào sẽ gọi api để lấy list employee
  useEffect(() => {
    getListEmployee(page, search, token, dispatch);
  }, [search, page, dispatch, token]);

  //Khi người dùng cố tình thay đổi url để tới page lớn hơn lastpage thì sẽ navigate lại page 1
  useEffect(() => {
    if (employees && page && page > employees.last_page) {
      if (search) return navigate(`?search=${search}&page=1`);
      return navigate(`?page=1`);
    }
  }, [employees, page, navigate, search]);

  return (
    <>
      <BreadCrumb root="General" />
      <Title search />
      <Card
        className="employee__card"
        size="default"
        extra={
          <div className="card__btns">
            <Button
              to="create-or-update"
              className="card__btn"
              type="text"
              icon={<FileAddOutlined />}
            >
              Add
            </Button>
            <Button
              className="card__btn"
              disabled={selectedRowKeys.length === 0}
              onClick={() => setShowModalDelete(true)}
              danger
              icon={<DeleteOutlined />}
              type="primary"
            >
              Delete
            </Button>
          </div>
        }
      >
        <div style={{ overflow: "hidden", position: "relative" }}>
          <div className="employee__wrapper-table">
            {employees.data &&
              formatDataEmployeeRecord(employees.data).length === 0 && (
                <EmptyData />
              )}
            <Table
              className="employee__table"
              locale={{ emptyText: <></> }}
              style={{ minHeight: 500 }}
              rowSelection={{
                selectedRowKeys,
                onChange: handleRowChange,
              }}
              onRow={(record) => ({
                onClick: () => {
                  handleRowClick(record.key);
                },
                onDoubleClick: () => {
                  handleRowDoubleClick(record.key);
                },
              })}
              columns={COLUMNS_RECORD}
              dataSource={formatDataEmployeeRecord(employees.data)}
              pagination={false}
              loading={getEmpoyee.loading}
            />
          </div>
        </div>
        <Pagination totalItem={employees.total} />
        {showModalDelete && (
          <Modal
            title="Delete"
            onSubmit={handleDelete}
            show={showModalDelete}
            confirmLoading={deleteE.loading}
            confirmDisabled={deleteE.loading}
            onHide={() => setShowModalDelete(false)}
          >
            <p>Are you sure you want to delete?</p>
          </Modal>
        )}
      </Card>
    </>
  );
}

export default Employee;
