import { Pagination } from "antd";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

import { decodeQuerySearch } from "../../utils/function.tsx";
import { ISearchQuery } from "../../interfaces/common-interface.ts";

function Pagin({ totalItem }) {
  const { page, search }: ISearchQuery = decodeQuerySearch();

  const navigate = useNavigate();

  const handleChangePage = (page: number) => {
    if (search) navigate(`?search=${search}&page=${page}`);
    navigate(`?page=${page}`);
  };

  return (
    <Pagination
      current={page}
      defaultCurrent={1}
      onChange={handleChangePage}
      total={totalItem}
      defaultPageSize={20}
      showSizeChanger={false}
    />
  );
}

export default memo(Pagin);
