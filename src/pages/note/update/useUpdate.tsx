import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import checkErrorType from "../../../utils/checkErrorType";
import { UpdateNoteApiProps } from "./update.types";
import useUpdateNoteApi from "../../../api/updateNoteApi/useUpdateNoteApi";

export const useUpdate = () => {
  const [openModal, setOpenModal] = useState(false);
  const queryClient = useQueryClient();
  const [errorResponse, setErrorResponse] = useState("");

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const { isPending, mutateAsync } = useMutation({
    mutationFn: useUpdateNoteApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["note"] });
      handleClose();
    },
    onError: (error: Error) => {
      const message = checkErrorType(error);
      setErrorResponse(message);
    },
  });

  const handleSubmit = (values: UpdateNoteApiProps) => mutateAsync(values);

  return {
    isLoading: isPending,
    openModal,
    handleClose,
    handleOpen,
    handleSubmit,
    errorResponse,
  };
};
