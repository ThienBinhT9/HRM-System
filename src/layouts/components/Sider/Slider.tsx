import { Menu } from "antd";
import React, { memo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./Sider.scss";

import { MENU_DATA } from "../../../constant/common.ts";

function Slider() {
  const path_name = useLocation().pathname.split("/")[1];
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate(e.key);
  };

  console.log(path_name);

  return (
    <div className="wrapper-sider">
      <div className="inner-sider">
        <Menu
          onClick={handleClick}
          activeKey={`/${path_name}`}
          className="sider__items"
          defaultSelectedKeys={["employee"]}
          defaultOpenKeys={["employee"]}
          mode="inline"
          items={MENU_DATA}
        />
      </div>
    </div>
  );
}

export default memo(Slider);
