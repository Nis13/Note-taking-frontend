import { AddNoteType } from "../../pages/note/add/add.types";
import api from "../api";

const useAddNoteApi = async (note: AddNoteType) => {
  const response = await api.post("note", note);
  return response;
};

export default useAddNoteApi;
