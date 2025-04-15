import api from "../api";

const useAddCategoryApi = async (category: { name: string }) => {
  const response = await api.post("category", category);
  return response;
};

export default useAddCategoryApi;
