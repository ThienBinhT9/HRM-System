export const REGEX_EMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
export const TEXT_EMAIL_FORMAT = "Please enter email in correct format";
export const TEXT_PASSWORD_NOTMATCH = "The passwords do not match";

export const TEXT_REQUIRED_INPUT = (name: string) => {
  return `Please enter ${name}`;
};

export const TEXT_REQUIRED_SELECT = (name: string) => {
  return `Please choose ${name}`;
};

export const TEXT_MAX = (number: number) => {
  return `Maximum ${number} characters`;
};

export const TEXT_MIN = (number: number) => {
  return `Minimum ${number} characters`;
};
