import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import checkErrorType from "../../../utils/checkErrorType";
import { AddCategoryType } from "./add.types";
import useAddCategoryApi from "../../../api/addCategoryApi/addCategoryApi";

export const useAdd = () => {
  const [openModal, setOpenModal] = useState(false);
  const [errorResponse, setErrorResponse] = useState<string | null>(null);
  const queryClient = useQueryClient();

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const { isPending, mutateAsync } = useMutation({
    mutationFn: useAddCategoryApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cattegory"] });
      handleClose();
    },
    onError: (error: Error) => {
      const errorMessage = checkErrorType(error);
      setErrorResponse(errorMessage);
    },
  });

  const handleAddTask = (taskToAdd: AddCategoryType) => mutateAsync(taskToAdd);

  return {
    errorResponse,
    isLoading: isPending,
    handleAddTask,
    handleOpen,
    handleClose,
    openModal,
  };
};
