import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

import "./Loading.scss";

function LoadingSpinner() {
  return (
    <div className="wrapper-loading">
      <FontAwesomeIcon className="loading__icon" icon={faCircleNotch} />
    </div>
  );
}

export default LoadingSpinner;
