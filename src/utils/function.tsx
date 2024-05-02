import React from "react";
import { DeleteOutlined } from "@ant-design/icons";
import queryString from "query-string";

import { IEmployee } from "../interfaces/employee-interface.ts";

export const formatOptionSelect = (
  data: Array<any>,
  label: string,
  value: string
) => {
  return (
    data &&
    data.map((item) => {
      return { value: item[value], label: item[label], key: item.id };
    })
  );
};

export function isObjectEmpty(obj: object) {
  // Kiểm tra nếu obj không phải là một đối tượng
  if (typeof obj !== "object" || obj === null) {
    return false;
  }

  // Lặp qua tất cả các thuộc tính của đối tượng
  for (var key in obj) {
    // Nếu đối tượng có ít nhất một thuộc tính, trả về false
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  // Nếu không có thuộc tính nào được tìm thấy, đối tượng được coi là rỗng
  return true;
}

export function capitalizeFirstLetter(str: string = "") {
  // Tách chuỗi thành mảng các từ
  const words = str.split(" ");

  // Duyệt qua từng từ trong mảng và viết hoa chữ cái đầu của từ đó
  const capitalizedWords = words.map((word) => {
    // Lấy chữ cái đầu tiên và viết hoa
    const firstLetter = word.charAt(0).toUpperCase();
    // Lấy phần còn lại của từ
    const restOfWord = word.slice(1);
    // Ghép chữ cái đầu viết hoa và phần còn lại của từ
    return firstLetter + restOfWord;
  });

  // Ghép lại các từ thành một chuỗi mới
  const capitalizedStr = capitalizedWords.join(" ");

  return capitalizedStr;
}

export const formatDataEmployeeRecord = (employees: IEmployee[] = []) => {
  return employees.map((employee) => {
    return {
      ...employee,
      key: employee.id,
      gender: decodeGender(employee.gender),
      created_at: convertISOToYYYYMMDD(employee.created_at),
    };
  });
};

export function encodeQueryString(params: object) {
  const searchParams = new URLSearchParams();
  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      searchParams.append(key, params[key]);
    }
  }
  return searchParams.toString();
}

//Hàm chuyển từ chuỗi sang object các query search vd: /search?q=abc&page=1 => {q:"abc", page:1}
export const decodeQuerySearch = () => {
  return queryString.parse(window.location.search);
};

export function formatInput(input: string = "") {
  // Chuyển đổi chuỗi nhập vào thành chữ thường và loại bỏ dấu gạch ngang nếu có
  const formattedInput = input.toLowerCase().replace(/-/g, " ");

  // Tách từ đầu tiên và chuyển đổi chữ cái đầu tiên thành chữ hoa
  const firstWord = formattedInput.split(" ")[0];
  const restOfWords = formattedInput.substring(firstWord.length);
  const formattedOutput =
    firstWord.charAt(0).toUpperCase() + firstWord.slice(1) + restOfWords;

  return formattedOutput;
}

///Hàm chuyển từ chuỗi new Date() sang dạng Y/M/D "vd: 2021/5/12"
export function convertISOToYYYYMMDD(isoDateTime: string) {
  const date = new Date(isoDateTime);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}/${month}/${day}`;
}

export const decodeGender = (number: number) => {
  if (number) return "Famale";
  return "Male";
};

//Hàm lấy chữ cái đầu tiên của chuỗi
export function firstLetter(str: string = ""): string | null {
  return str.length > 0 ? str[0] : null;
}

export const formatDocument = (docs, onRemoveDoc?) => {
  return docs.map((doc, index) => {
    return {
      id: doc.id,
      key: `${index}`,
      no: index + 1,
      document_name: doc.document
        ? doc.document.split("/")[doc.document.split("/").length - 1]
        : doc.document_name || doc.name,
      created_at: doc.created_at
        ? convertISOToYYYYMMDD(`${doc.created_at}`)
        : convertISOToYYYYMMDD(`${new Date()}`),
      action: (
        <DeleteOutlined
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onRemoveDoc(index, doc)}
        />
      ),
    };
  });
};

export function copyValues2(sourceObj: any, targetObj: any): any {
  // Kiểm tra nếu một trong hai object không tồn tại
  if (!sourceObj || !targetObj) {
    // Trả về object mục tiêu nguyên thủy
    return targetObj;
  }

  // Kiểm tra các key và sao chép giá trị từ sourceObj sang targetObj
  Object.keys(targetObj).forEach((key) => {
    if (sourceObj.hasOwnProperty(key)) {
      targetObj[key] = sourceObj[key];
    }
  });

  // Trả về targetObj đã được cập nhật
  return targetObj;
}

export const formDataUploadEmployee = (
  employee_id: string,
  deleted_ids?: Array<number>,
  document_upload?: Array<File>
) => {
  const formData = new FormData();
  formData.append("employee_id", employee_id);
  if (deleted_ids && deleted_ids?.length > 0) {
    deleted_ids.forEach((id) => {
      formData.append("deleted_ids[]", id.toString());
    });
  }
  if (document_upload && document_upload.length > 0) {
    document_upload.forEach((file) => {
      formData.append("documents[]", file);
    });
  }
  return formData;
};

export const getIdsBenefits = (data: Array<any>) => {
  return data.map((item) => item.id || item);
};
