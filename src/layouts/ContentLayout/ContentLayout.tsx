import React from "react";

import "./ContentLayout.scss";

import Footer from "../components/Footer/Footer.tsx";

function ContentLayout({ children }) {
  return (
    <div className="wrapper-contentLayout">
      {children}
      <Footer />
    </div>
  );
}

export default ContentLayout;
