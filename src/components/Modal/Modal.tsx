import React from "react";
import { VscChromeClose } from "react-icons/vsc";

interface Modal {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<Modal> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity" onClick={onClose}></div>
          <div className="relative bg-white rounded-lg shadow-lg max-w-2xl w-full mx-auto">
        <div>
          {children}
          <button
              onClick={onClose}
              className="absolute top-0 right-0 mt-4 mr-4 text-white hover:text-gray-400"
            >
              <VscChromeClose className="h-6 w-6 text-black hover:text-gray-700" />
            </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
