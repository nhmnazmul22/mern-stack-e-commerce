// === Internal Imports ===
import {
  FeaturesListService,
  LegalsDetailsService,
} from "../services/featuresServices.js";

export const featuresList = async (req, res) => {
  const result = await FeaturesListService();
  return res.json(result);
};

export const legalDetails = async (req, res) => {
  const result = await LegalsDetailsService(req);
  return res.json(result);
};
