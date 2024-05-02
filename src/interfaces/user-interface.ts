export interface IUser {
  [key: string]: any;
}

export interface IUserState {
  user: IUser;
  getDetail: {
    loading: boolean;
  };
}
