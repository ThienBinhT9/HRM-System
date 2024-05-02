import React from "react";
import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router-dom";

import { formatInput } from "../../utils/function.tsx";

interface Props {
  root?: string;
  last?: string;
}

function BreadCrumb({ root, last }: Props) {
  const pathname = useLocation().pathname;
  const pathSegments = pathname
    .split("/")
    .filter((segment) => isNaN(Number(segment)));

  const items = pathSegments.map((segment, index) => {
    const isLastSegment = index === pathSegments.length - 1;

    return {
      isLastSegment,
      title: isLastSegment && last ? last : formatInput(segment),
      path: `/${pathSegments.slice(0, index + 1).join("/")}`,
    };
  });

  return (
    <div className="wrapper-breadcrumb">
      <Breadcrumb className="breadcrumb" separator=">">
        <Breadcrumb.Item key={99}>{root}</Breadcrumb.Item>
        {items.map((item, index) => {
          return (
            <Breadcrumb.Item key={index}>
              {item.isLastSegment ? (
                item.title
              ) : (
                <Link to={item.path}>{item.title}</Link>
              )}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </div>
  );
}

export default BreadCrumb;
