import Swal from "sweetalert2";

export const useModals = () => {
  const showErrorModal = (title = "Error!", message = "Algo Salió Mal") => {
    Swal.fire({
      title: title,
      text: message,
      icon: "error",
      confirmButtonText: "Ok",
    });
  };

  const showSuccessModal = (
    title = "Tarea Exitosa!",
    message = "El proceso terminó sin problemas."
  ) => {
    Swal.fire({
      title: title,
      text: message,
      icon: "success",
      confirmButtonText: "Ok",
    });
  };
  return {
    showErrorModal,
    showSuccessModal,
  };
};
