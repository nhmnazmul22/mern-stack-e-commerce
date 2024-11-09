// === Internal Imports ===
import { FeaturesListService } from "../services/featuresServices.js";

export const featuresList = async (req, res) => {
  const result = await FeaturesListService();
  return res.json(result);
};
