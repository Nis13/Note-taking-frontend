import { UpdateNoteApiProps } from "../../pages/note/update/update.types";
import api from "../api";

const useUpdateNoteApi = async ({ id, ...updatedData }: UpdateNoteApiProps) => {
  const response = await api.put(`note/${id}`, updatedData);
  return response;
};

export default useUpdateNoteApi;
