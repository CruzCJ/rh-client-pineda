import { useState, useEffect } from "react";
import { PersonaDB } from "../../modules/personas/persona.types";
import { pinedaApi } from "../../datasources/pinedaApi.service";

export const useGetPersonas = () => {
  const [personas, setPersonas] = useState<PersonaDB[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPersonas = async () => {
    setLoading(true);
    try {
      const response = await pinedaApi.get<PersonaDB[]>("/personas");
      setPersonas(response.data);
      setLoading(false);
    } catch (err) {
      setError("Error fetching user data");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPersonas();
  }, []);

  return { personas, loading, error, refetch: fetchPersonas };
};

