import { BrowserRouter } from "react-router-dom";
import { AuthenticationProvider } from "./modules/auth/Authentication.context";
import { Layout } from "./components/layout/Layout";
import { AppRouter } from "./modules/routing/AppRouter";

export const App = () => {
  return (
    <BrowserRouter>
      <AuthenticationProvider>
        <Layout>
          <AppRouter />
        </Layout>
      </AuthenticationProvider>
    </BrowserRouter>
  );
};
