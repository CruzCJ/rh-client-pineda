import React, { useState, ChangeEvent, FormEvent } from "react";

import { PersonaDB } from "../personas/persona.types";

interface CreatePersonaProps {
  onCreate: (persona: PersonaDB) => void;
}

const CreatePersonas: React.FC<CreatePersonaProps> = ({ onCreate }) => {
  const [persona, setPersona] = useState<PersonaDB>({
    idPersona: "",
    nombre: "",
    apellido1: "",
    apellido2: "",
    cedula: "",
    fechaNacimiento: "",
    sexo: "",
  });

  const handlePersonaChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersona((prevPersona) => ({ ...prevPersona, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const personaData = { ...persona };

      console.log("Persona a crear:", personaData);
      onCreate(personaData);

      setPersona({
        idPersona: "",
        nombre: "",
        apellido1: "",
        apellido2: "",
        cedula: "",
        fechaNacimiento: "",
        sexo: "",
      });
    } catch (error) {
      console.error("Error creando persona:", error);
    }
  };
  return (
    <section>
      <div>
        <h2 className="ml-3 mt-3 text-xl font-bold text-gray-900">
          Crear una nueva Persona
        </h2>
        <form
          onSubmit={handleSubmit}
          className="p-4 border rounded bg-gray-100"
        >
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-3">Datos de la Persona</h3>
            <div>
              <label htmlFor="nombre" className="block font-medium">
                Nombre de la persona
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={persona.nombre}
                onChange={handlePersonaChange}
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
                value={persona.apellido1}
                onChange={handlePersonaChange}
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
                value={persona.apellido2}
                onChange={handlePersonaChange}
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
                value={persona.cedula}
                onChange={handlePersonaChange}
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
                type="date"
                id="fechaNacimiento"
                name="fechaNacimiento"
                value={persona.fechaNacimiento}
                onChange={handlePersonaChange}
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
                value={persona.sexo}
                onChange={handlePersonaChange}
                placeholder="sexo de la persona"
                className="mt-1 block w-full border rounded p-2"
                required
              />
            </div>

            
            <div className="mt-6">
              <button
                type="submit"
                className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-400 focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900"
              >
                Crear persona
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreatePersonas;
