export interface ILoginParams {
  username: string;
  password: string;
  company_id: number | null;
}

export interface IAuthState {
  token: string;
  login: {
    loading: boolean;
    message: string;
  };
  register: {
    loading: boolean;
    message: string;
  };
  logout: {
    loading: boolean;
  };
  forgot_password: {
    loading: boolean;
  };
  reset_password: {
    loading: boolean;
  };
}

export interface IChangePassword {
  password: string;
  password_confirmation: string;
}
