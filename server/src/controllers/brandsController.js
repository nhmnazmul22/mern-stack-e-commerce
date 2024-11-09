// === Internal Imports ===
import { BrandListService } from "../services/productServices.js";

export const brandList = async (req, res) => {
  const result = await BrandListService();
  return res.json(result);
};
