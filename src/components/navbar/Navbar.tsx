import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthenticationContext } from "../../modules/auth/Authentication.context";
import { appRoutes } from "../../modules/routing/routes";

export const Navbar = () => {
  const { user } = useContext(AuthenticationContext);
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white">
          {appRoutes
            .filter((route) => user?.routes.includes(route.path))
            .map((route) => (
              <Link to={`${user?.rootPath}${route.path}`} className="px-4">
                {route.name}
              </Link>
            ))}
        </div>
      </div>
    </nav>
  );
};
