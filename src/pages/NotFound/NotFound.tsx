import React from "react";

import "./NotFound.scss";
import bg_notfound from "../../assets/images/bg-notfound.png";

import Button from "../../components/Button/Button.tsx";

function NotFound() {
  return (
    <div className="wrapper-notFound">
      <div className="inner-notfound">
        <h1 className="notfound-heading">Uh oh, we can't find that page...</h1>
        <p className="notfound-desc">
          Sorry, the page you are looking for doesn't exist or has been moved
        </p>
        <Button className="notfound-btn" type="primary" to="/">
          Go Home
        </Button>
        <img className="notfound-bg" src={bg_notfound} alt="bg" />
      </div>
    </div>
  );
}

export default NotFound;
