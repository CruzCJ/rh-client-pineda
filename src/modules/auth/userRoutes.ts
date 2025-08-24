import { UserType } from "../users/user.types";

export const userRoutesMap: Record<UserType, string[]> = {
  [UserType.ADMIN]: ["/home", "/userstemp", "/reservation","/personas"],
  [UserType.EMPLOYEE]: ["/home", "/reservation"],
  [UserType.GUEST]: ["/home", "/login", "/about"],
};
