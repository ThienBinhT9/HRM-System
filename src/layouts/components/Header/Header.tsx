import { Popover } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./Header.scss";
import logo from "../../../assets/images/logo.png";
import { RootState } from "../../../redux/store.ts";
import { firstLetter } from "../../../utils/function.tsx";
import { logout } from "../../../services/auth-service.ts";
import { TEXT_NAME_PROJECT } from "../../../constant/common.ts";

import Modal from "../../../components/Modal/Modal.tsx";
import Button from "../../../components/Button/Button.tsx";

function Header() {
  const user = useSelector((state: RootState) => state.user.user);
  const token = useSelector((state: RootState) => state.auth.token);
  const { loading } = useSelector((state: RootState) => state.auth.logout);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showModalLogout, setShowModalLogout] = useState(false);

  //Xử lý logout khi click vào nút signout
  const handleLogout = () => {
    logout(dispatch, navigate, token);
  };

  return (
    <div className="wrapper-header">
      <div className="header-left">
        <img className="header-logo" src={logo} alt="logo" />
        <h3 className="header-title">{TEXT_NAME_PROJECT}</h3>
      </div>
      <div className="header-right">
        <Popover
          content={
            <div className="header-popover">
              <div className="header-popover__title">
                <p className="header-avatar">{firstLetter(user.username)}</p>
                <p className="header-username">{user.username}</p>
              </div>
              <div className="header-popver__content">
                <p>Staff id: {user.employee_id}</p>
              </div>
              <Button
                type="primary"
                size="large"
                block
                onClick={() => setShowModalLogout(true)}
              >
                Sign out
              </Button>
              <Button type="link" to="/settings/change-password">
                Reset password
              </Button>
            </div>
          }
          trigger="click"
          placement="topRight"
          arrow={undefined}
        >
          <p className="header-avatar">{firstLetter(user.username)}</p>
        </Popover>
      </div>
      <Modal
        title="Do you wish to sign out?"
        confirmLoading={loading}
        confirmDisabled={loading}
        show={showModalLogout}
        onSubmit={handleLogout}
        onHide={() => setShowModalLogout(false)}
      ></Modal>
    </div>
  );
}

export default Header;
