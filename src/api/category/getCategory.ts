// src/api/categoryApi.ts

import { Category } from "../../interface/category";
import api from "../api";

export const fetchCategories = async (): Promise<Category[]> => {
  const res = await api.get("/category");
  return res.data;
};
