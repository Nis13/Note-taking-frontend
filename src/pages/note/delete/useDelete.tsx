import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import checkErrorType from "../../../utils/checkErrorType";
import useDeleteNoteApi from "../../../api/deleteNoteApi/useDeleteNoteApi";

const useDelete = () => {
  const [openModal, setOpenModal] = useState(false);
  const [errorResponse, setErrorResponse] = useState("");

  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: useDeleteNoteApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["note"] });
      handleClose();
    },
    onError: (error: Error) => {
      const message = checkErrorType(error);
      setErrorResponse(message);
    },
  });

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const handleDelete = (id: string) => mutateAsync(id);

  return {
    isLoading: isPending,
    handleDelete,
    openModal,
    handleClose,
    handleOpen,
    errorResponse,
  };
};

export default useDelete;
