import { pinedaApi } from "../../datasources/pinedaApi.service";
import { PersonaDB } from "../../modules/personas/persona.types";

export const useUpdatePersonas = () => {
  const updatePersona = async (idPersona: string, updatedPersona: PersonaDB): Promise<PersonaDB> => {
    try {
      const response = await pinedaApi.put<PersonaDB>(`/personas/${idPersona}`, updatedPersona);
      return response.data;
    } catch (error) {
      console.error("Error updating persona:", error);
      throw error;
    }
  };

  return { updatePersona };
};

