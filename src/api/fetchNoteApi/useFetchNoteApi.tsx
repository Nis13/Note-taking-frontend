import api from "../api";

interface NoteQuery {
  title?: string;
  categoryId?: string;
}

const fetchNoteApi = async (query: NoteQuery = {}) => {
  const response = await api.get(
    `/note?title=${query.title || ""}&categoryId=${query.categoryId || ""}`
  );
  return response.data;
};

export default fetchNoteApi;
