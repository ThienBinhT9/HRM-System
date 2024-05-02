const HOST = process.env.REACT_APP_HOST;

enum SERVICE_API {
  user,
  protected,
  public,
}

const getBaseUrl = (service: SERVICE_API) => {
  if (service === SERVICE_API.user) return `${HOST}/user`;
  if (service === SERVICE_API.protected) return `${HOST}/protected`;
  if (service === SERVICE_API.public) return `${HOST}`;
};

export const API_PATHS = {
  //AUTH
  login: `${getBaseUrl(SERVICE_API.public)}/login`,
  register: `${getBaseUrl(SERVICE_API.public)}/regiser`,
  logout: `${getBaseUrl(SERVICE_API.public)}/logout`,
  forgotPassword: `${getBaseUrl(SERVICE_API.public)}/forgot-password`,
  resetPassword: `${getBaseUrl(SERVICE_API.public)}/reset-password`,
  changePassword: `${getBaseUrl(SERVICE_API.public)}/change-password`,

  //USER
  getDetailUser: `${getBaseUrl(SERVICE_API.user)}/detail`,

  //EMPLOYEE
  getEmployee: `${getBaseUrl(SERVICE_API.public)}/employee`,
  deleteEmployee: `${getBaseUrl(SERVICE_API.public)}/employee/multiple-delete`,
  uploadDocument: `${getBaseUrl(SERVICE_API.public)}/employee-document/upload`,

  //Common
  getOptionsDepartment: `${getBaseUrl(SERVICE_API.public)}/department`,
  getOptionsPosition: `${getBaseUrl(SERVICE_API.public)}/position`,
  getOptionsBenefit: `${getBaseUrl(SERVICE_API.public)}/benefit`,
  getOptionsGrade: `${getBaseUrl(SERVICE_API.public)}/grade`,
  getOptionsMarriage: `${getBaseUrl(SERVICE_API.public)}/marriage`,
  getOptionsCompany: `${getBaseUrl(SERVICE_API.public)}/company`,
};
