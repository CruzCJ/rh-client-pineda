export interface UserDb {
  id: number;
  name: string;
  lastname: string;
  email: string;
  password: string;
}

export type User = {
  rootPath: string;
  routes: string[];
  username: string;
  id: number;
  userType: UserType;
  defaultRoute?: string;
};

export enum UserType {
  ADMIN = "admin",
  EMPLOYEE = "employee",
  GUEST = "guest",
}

export type LoginForm = {
  username: string;
  password: string;
};
