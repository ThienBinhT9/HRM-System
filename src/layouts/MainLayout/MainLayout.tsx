import React from "react";

import Header from "../components/Header/Header.tsx";
import Sider from "../components/Sider/Slider.tsx";
import Footer from "../components/Footer/Footer.tsx";

import "./MainLayout.scss";

function MainLayout({ children }) {
  return (
    <div className="wrapper-mainLayout">
      <Header />
      <div className="mainLayout__content">
        <Sider />
        <div className="mainLayout__page">
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
