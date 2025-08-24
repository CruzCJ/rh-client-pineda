import React from "react";

interface ActionButtonsProps {
  onEdit: () => void;
  onDelete: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ onEdit, onDelete }) => {
  return (
    <div>
      <button
        onClick={onEdit}
        className="bg-blue-500 hover:bg-blue-700 text-white px-1 rounded text-lg mr-2 "
      >
        Editar
      </button>
      <button
        onClick={onDelete}
        className="bg-red-500 hover:bg-red-700 text-white px-1 rounded text-lg"
      >
        Eliminar
      </button>
    </div>
  );
};

export default ActionButtons;

