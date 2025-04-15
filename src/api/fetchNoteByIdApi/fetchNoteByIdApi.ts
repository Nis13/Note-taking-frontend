import api from "../api";

const fetchNoteByIdApi = async (id: string) => {
  const response = await api.get(`/note/${id}`);
  return response.data;
};

export default fetchNoteByIdApi;
