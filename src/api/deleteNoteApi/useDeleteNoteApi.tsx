import api from "../api";

const useDeleteNoteApi = async (id: string) => {
  const response = await api.delete(`/note/${id}`);
  return response;
};

export default useDeleteNoteApi;
