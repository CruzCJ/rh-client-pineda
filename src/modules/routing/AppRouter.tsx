import { Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { AuthenticationContext } from "../auth/Authentication.context";
import { appRoutes } from "./routes";
// const userTypeComponents: Record<string, JSX.Element> = {
//   admin: <Users />,
//   employee: <Reservation />,
// };
export const AppRouter = () => {
  const { user } = useContext(AuthenticationContext);

  const initialComponent = () => {
    return (
      <Navigate to={`${user?.defaultRoute ?? user?.rootPath + "/home"}`} />
    );
  };

  return (
    <Routes>
      <>
        {appRoutes.map((prop, key) => {
          if (user?.routes.includes(prop.path)) {
            return (
              <Route
                path={`${user.rootPath}${prop.path}/*`}
                element={<prop.component />}
                key={key}
              />
            );
          }
        })}
        <Route path="/*" element={initialComponent()} />
      </>
    </Routes>
  );
};
