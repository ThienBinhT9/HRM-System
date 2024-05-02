import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import "./Home.scss";

function Home() {
  const navigate = useNavigate();
  const path = useLocation().pathname;

  useEffect(() => {
    if (path === "/") navigate("employee");
  }, [navigate, path]);

  return (
    <div className="wrapper-home">
      <Outlet />
    </div>
  );
}

export default Home;
