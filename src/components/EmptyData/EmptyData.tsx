import React from "react";

import "./EmptyData.scss";
import { EmptyDataImage } from "../../assets/icons/icon.tsx";

const EmptyData = () => (
  <div className="wrapper-emptyData">
    <div className="emptyData__icon">{EmptyDataImage()}</div>
    <h5 className="emptyData__title">No Data</h5>
    <p className="emptyData__desc">
      Your record will be synced here once it ready
    </p>
  </div>
);

export default EmptyData;
