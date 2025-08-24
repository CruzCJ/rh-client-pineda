import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

import { useGetPersonas } from "../../hooks/persona/useGetPersonas";
import { useDeletePersonas } from "../../hooks/persona/useDeletePersonas";
import { useUpdatePersonas } from "../../hooks/persona/useUpdatePersonas";
import { useCreatePersona } from "../../hooks/persona/useCreatePersonas";

import ActionButtons from "../../components/ActionButtons/ActionButtons";
import Swal from "sweetalert2";
import { PersonaDB } from "../personas/persona.types";

import Modal from "../../components/Modal/Modal";
import CreatePersonas from "./CreatePersonas";
import UpdatePersonas from "./UpdatePersonas";

export const Personas = () => {
  const { personas, loading, error, refetch } = useGetPersonas();
  const [showModalCreatePersona, setShowModalCreatePersona] = useState(false);
  const [selectedPersona, setSelectedPersona] = useState<any>(null);
  const [showModalEditPersona, setShowModalEditPersona] = useState(false);

  const handleShowModalEditPersona = () => setShowModalEditPersona(true);

  const { createPersona } = useCreatePersona();
  const { deletePersona } = useDeletePersonas();
  const { updatePersona } = useUpdatePersonas();

  const handleCloseModalCreatePersona = () => {
    setShowModalCreatePersona(false);
  };

  const handleCloseModalEditPersona = () => {
    setShowModalEditPersona(false);
    setSelectedPersona(null);
  };

  const handleEdit = (persona: any) => {
    setSelectedPersona(persona);
    handleShowModalEditPersona();
  };

  const handleShowModalCreatePersona = () => setShowModalCreatePersona(true);

  const handleCreate = async (persona: PersonaDB) => {
    try {
      await createPersona(persona);

      Swal.fire("¡Creado!", "El segmento ha sido creado.", "success");
      refetch();
      handleCloseModalCreatePersona();
    } catch (err) {
      console.error("Error al crear segmento:", err);
      Swal.fire("Error", "Hubo un error al crear el segmento.", "error");
    }
  };

  const handleDelete = (idPersona: string) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esto.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        deletePersona(idPersona)
          .then(({ success, error }) => {
            if (success) {
              console.log("Persona eliminado");
              Swal.fire(
                "¡Eliminado!",
                "La persona ha sido eliminada.",
                "success"
              );
              refetch();
            } else {
              Swal.fire(
                "Error",
                error || "Hubo un error al eliminar la persona.",
                "error"
              );
            }
          })
          .catch((err: any) => {
            console.error("Error al eliminar la persona:", err);
            Swal.fire(
              "Error",
              "Hubo un error al eliminar la persona.",
              "error"
            );
          });
      }
    });
  };

  const handleUpdate = (idPersona: string, persona: PersonaDB) => {
    updatePersona(idPersona, persona)
      .then((updatedPersona) => {
        console.log("Persona actualizado", updatedPersona);
        Swal.fire(
          "¡Actualizado!",
          "La persona ha sido actualizada.",
          "success"
        );
        refetch();
        handleCloseModalEditPersona();
      })
      .catch((err: any) => {
        console.error("Error al actualizar persona:", err);
        Swal.fire("Error", "Hubo un error al actualizar la persona.", "error");
      });
  };

  const columns: ColDef[] = [
    { headerName: "ID", field: "idPersona" },
    { headerName: "Nombre", field: "nombre" },
    { headerName: "Apellido 1", field: "apellido1" },
    { headerName: "Apellido 2", field: "apellido2" },
    { headerName: "Cedula", field: "cedula" },
    { headerName: "Fecha de Nacimiento", field: "fechaNacimiento" },
    { headerName: "Sexo", field: "sexo" },
    {
      headerName: "Acciones",
      field: "acciones",
      cellRenderer: (params: any) => (
        <ActionButtons
          onEdit={() => handleEdit(params.data)}
          onDelete={() => handleDelete(params.data.idPersona)}
        />
      ),
    },
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }


  return (
    <div>
      <div className="bg-white dark:bg-gray-200 relative shadow-md overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
          <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
            <button
              onClick={handleShowModalCreatePersona}
              type="button"
              className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
            >
              Agregar Persona
            </button>
          </div>
        </div>
      </div>
      <div className="ag-theme-quartz" style={{ height: 600, width: "100%" }}>
        <AgGridReact
          rowData={personas}
          columnDefs={columns}
          defaultColDef={{ sortable: true, filter: true, resizable: true }}
        />
      </div>

      <Modal
        isOpen={showModalCreatePersona}
        onClose={handleCloseModalCreatePersona}
      >
        <CreatePersonas onCreate={handleCreate} />
      </Modal>

      <Modal
        isOpen={showModalEditPersona}
        onClose={handleCloseModalEditPersona}
      >
        <UpdatePersonas persona={selectedPersona} onUpdate={handleUpdate} />
      </Modal>
    </div>
  );
};
