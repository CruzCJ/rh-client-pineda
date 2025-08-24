import { useState } from "react";
import { ErrorResponse } from "react-router-dom";
import { User } from "../../modules/users/user.types";
import { useModals } from "../modals/useModals.hook";
import { pinedaApi } from "../../datasources/pinedaApi.service";

export const useSignin = () => {
  const { showErrorModal } = useModals();
  const [error, setError] = useState<string>("");

  const signin = async (
    email: string,
    password: string
  ): Promise<User | undefined> => {
    try {
      const response = await pinedaApi.post<User>("/users/signin", {
        email,
        password,
      });
      const user = { ...response.data };
      return user;
    } catch (error: any) {
      console.error("Error signing in:", error);
      if (error.response && error.response.status === 401) {
        showErrorModal(
          "Error!",
          "Correo electrónico o contraseña incorrectos."
        );
      } else {
        const errorMessage =
          (error.response && (error.response.data as ErrorResponse)) ||
          "Error signing in";
        setError(errorMessage);
      }
      return undefined;
    }
  };

  return {
    signin,
    error,
  };
};
