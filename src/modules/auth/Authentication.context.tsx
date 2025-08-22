import React, { PropsWithChildren, useEffect, useState } from "react";
import { LoginForm, User, UserType } from "../users/user.types";
import { userRoutesMap } from "./userRoutes";
import { useSignin } from "../../hooks/auth/useSignIn.hook";

//TEMPORARY USERS YOU'll have to comment/uncomment in order to change user profile to test, only one can be active.

//GUEST USER
// const guestUser: User = {
//   id: 0,
//   rootPath: "",
//   routes: userRoutesMap[UserType.GUEST],
//   username: "Guest",
//   userType: UserType.GUEST,
//   defaultRoute: "/home",
// };

//ADMIN USER
const guestUser: User = {
  id: 0,
  rootPath: "/admin",
  routes: userRoutesMap[UserType.ADMIN],
  username: "Admin",
  userType: UserType.ADMIN,
  defaultRoute: "/admin/userstemp",
};

//EMPLOYEE USER
// const guestUser: User = {
//   id: 0,
//   rootPath: "/employee",
//   routes: userRoutesMap[UserType.EMPLOYEE],
//   username: "Employee",
//   userType: UserType.EMPLOYEE,
// };

type AuthenticationContextType = {
  user: User | undefined;
  login: (attrs: LoginForm) => void;
  logout: () => void;
};

export const AuthenticationContext = React.createContext(
  {} as AuthenticationContextType
);

export const AuthenticationProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const { signin } = useSignin();
  const [user, setUser] = useState<User>();

  const doLogin = async (attrs: LoginForm) => {
    try {
      const userData = await signin(attrs.username, attrs.password);
      if (!userData) {
        setUser(guestUser);
        return;
      }
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const user: User = JSON.parse(localStorage.getItem("user") as string);
      setUser(user);
    } else {
      setUser(guestUser);
    }
  }, []);

  const logout = () => {
    setUser(guestUser);
    localStorage.removeItem("user");
  };

  return (
    <AuthenticationContext.Provider value={{ user, login: doLogin, logout }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
