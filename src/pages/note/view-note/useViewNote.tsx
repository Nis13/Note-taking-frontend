import { useQuery } from "@tanstack/react-query";
import fetchNoteByIdApi from "../../../api/fetchNoteByIdApi/fetchNoteByIdApi";
import { useParams } from "react-router-dom";

export const useNotes = () => {
  const { id } = useParams();
  const { isPending, data, isError, error } = useQuery({
    queryKey: ["note"],
    queryFn: () => fetchNoteByIdApi(id as string),
  });

  return {
    isLoading: isPending,
    isError,
    error,
    data,
  };
};
