import { PropsWithChildren } from "react";
import { Navbar } from "../navbar/Navbar";
export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};
