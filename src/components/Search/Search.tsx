import { useNavigate } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";

import "./Search.scss";
import useDebouce from "../../hooks/useDebouce.ts";
import { decodeQuerySearch } from "../../utils/function.tsx";
import { ISearchQuery } from "../../interfaces/common-interface";

import InputFeild from "../InputFeild/InputFeild.tsx";

function Search() {
  const { page = 1, search }: ISearchQuery = decodeQuerySearch();

  const [keySearch, setKeySearch] = useState(search || "");

  const navigate = useNavigate();
  const keyDebouce = useDebouce(keySearch, 700);

  useEffect(() => {
    if (search || keyDebouce) {
      navigate(`?search=${keyDebouce}&page=${page}`);
    }
  }, [keyDebouce, navigate, search, page]);

  return (
    <InputFeild
      className="wrapper-search"
      size="large"
      value={keySearch}
      onChange={(e) => setKeySearch(e.target.value)}
      placeholder="Search..."
      prefix={<SearchOutlined />}
    />
  );
}

export default Search;
