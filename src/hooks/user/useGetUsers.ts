import { useState, useEffect } from "react";
import { UserDb } from "../../modules/users/user.types";
import { pinedaApi } from "../../datasources/pinedaApi.service";

export const useGetUsers = () => {
  const [users, setUsers] = useState<UserDb[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await pinedaApi.get<UserDb[]>("/users");
        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching user data");
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { users, loading, error };
};
