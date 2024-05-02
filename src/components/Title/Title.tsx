import React from "react";
import { useLocation } from "react-router-dom";

import "./Title.scss";
import { capitalizeFirstLetter } from "../../utils/function.tsx";

import Button from "../Button/Button.tsx";
import Search from "../Search/Search.tsx";

interface Props {
  search?: boolean;
  btnDisabled?: boolean;
  btnLoading?: boolean;
  button?: string;
  onSubmit?: () => void;
}

function Title(props: Props) {
  const { search, button, btnDisabled, btnLoading, onSubmit } = props;
  const namePage = useLocation().pathname.split("/")[1];
  return (
    <div className="wrapper-title">
      <h1>{capitalizeFirstLetter(namePage)} Management</h1>
      {search && <Search />}
      {button && (
        <Button
          disabled={btnDisabled}
          type="primary"
          loading={btnLoading}
          onClick={onSubmit}
        >
          {button}
        </Button>
      )}
    </div>
  );
}

export default Title;
