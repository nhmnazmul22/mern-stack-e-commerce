// === Internal Imports ===
import { CategoryListService } from "../services/productServices.js";

export const categoryList = async (req, res) => {
  const result = await CategoryListService();
  return res.json(result);
};
