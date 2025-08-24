import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { PersonaDB } from "../personas/persona.types";

interface UpdatePersonaProps {
  persona: PersonaDB | null;
  onUpdate: (idPersona: string, persona: PersonaDB) => void;
}

const UpdatePersonas: React.FC<UpdatePersonaProps> = ({ persona, onUpdate }) => {
  const [updatedPersona, setUpdatedPersona] = useState<PersonaDB>({
    idPersona: "",
    nombre: "",
    apellido1: "",
    apellido2: "",
    cedula: "",
    fechaNacimiento: "",
    sexo: "",
  });

  useEffect(() => {
    if (persona) {
      setUpdatedPersona(persona);
    }
  }, [persona]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedPersona({ ...updatedPersona, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      onUpdate(updatedPersona.idPersona, updatedPersona);
    } catch (error) {
      console.error("Error actualizando persona:", error);
    }
  };

  return (
    <section>
      <div>
        <h2 className="ml-3 mt-3 text-xl font-bold text-gray-900 ">Actualizar persona</h2>
        <form onSubmit={handleSubmit} className="p-4 border rounded bg-gray-100">
          <div>
              <label htmlFor="nombre" className="block font-medium">
                Nombre de la persona
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={updatedPersona.nombre}
                onChange={handleChange}
                placeholder="Nombre de la persona"
                className="mt-1 block w-full border rounded p-2"
                required
              />
            </div>
            <div>
              <label htmlFor="apellido1" className="block font-medium">
                Apellido 1
              </label>
              <input
                type="text"
                id="apellido1"
                name="apellido1"
                value={updatedPersona.apellido1}
                onChange={handleChange}
                placeholder="apellido1 de la persona"
                className="mt-1 block w-full border rounded p-2"
                required
              />
            </div>
            <div>
              <label htmlFor="apellido2" className="block font-medium">
                Apellido 2
              </label>
              <input
                type="text"
                id="apellido2"
                name="apellido2"
                value={updatedPersona.apellido2}
                onChange={handleChange}
                placeholder="apellido2 de la persona"
                className="mt-1 block w-full border rounded p-2"
                required
              />
            </div>
            <div>
              <label htmlFor="cedula" className="block font-medium">
                cedula
              </label>
              <input
                type="text"
                id="cedula"
                name="cedula"
                value={updatedPersona.cedula}
                onChange={handleChange}
                placeholder="cedula de la persona"
                className="mt-1 block w-full border rounded p-2"
                required
              />
            </div>
            <div>
              <label htmlFor="fechaNacimiento" className="block font-medium">
                Fecha de Nacimiento
              </label>
              <input
                type="text"
                id="fechaNacimiento"
                name="fechaNacimiento"
                value={updatedPersona.fechaNacimiento}
                onChange={handleChange}
                placeholder="fechaNacimiento de la persona"
                className="mt-1 block w-full border rounded p-2"
                required
              />
            </div>
            <div>
              <label htmlFor="sexo" className="block font-medium">
                Sexo
              </label>
              <input
                type="text"
                id="sexo"
                name="sexo"
                value={updatedPersona.sexo}
                onChange={handleChange}
                placeholder="sexo de la persona"
                className="mt-1 block w-full border rounded p-2"
                required
              />
            </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-500 rounded-lg focus:ring-4 hover:bg-blue-400">
              Actualizar Persona
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdatePersonas;


