import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import checkErrorType from "../../../utils/checkErrorType";
import { AddNoteType } from "./add.types";
import useAddNoteApi from "../../../api/addNoteApi/useAddNoteApi";

export const useAdd = () => {
  const [openModal, setOpenModal] = useState(false);
  const [errorResponse, setErrorResponse] = useState<string | null>(null);
  const queryClient = useQueryClient();

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const { isPending, mutateAsync } = useMutation({
    mutationFn: useAddNoteApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["note"] });
      handleClose();
    },
    onError: (error: Error) => {
      const errorMessage = checkErrorType(error);
      setErrorResponse(errorMessage);
    },
  });

  const handleAddTask = (taskToAdd: AddNoteType) => mutateAsync(taskToAdd);

  return {
    errorResponse,
    isLoading: isPending,
    handleAddTask,
    handleOpen,
    handleClose,
    openModal,
  };
};
