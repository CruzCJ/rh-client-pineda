import { pinedaApi } from "../../datasources/pinedaApi.service";
import { PersonaDB } from "../../modules/personas/persona.types";

export const useCreatePersona = () => {
  const createPersona = async (newPersona: PersonaDB): Promise<PersonaDB> => {
    try {
      const response = await pinedaApi.post<PersonaDB>("/personas", newPersona);
      return response.data;
    } catch (error) {
      console.error("Error creating persona:", error);
      throw error;
    }
  };

  return { createPersona };
};
