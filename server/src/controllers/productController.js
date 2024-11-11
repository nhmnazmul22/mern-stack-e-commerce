// === Internal Imports ===
import {
  DetailService,
  ListByBrandServices,
  ListByCategoryServices,
  ListByFilterService,
  ListByKeywordService,
  ListByRemarkServices,
  ListBySliderService,
  ReviewListService,
} from "../services/productServices.js";

export const productListByCategory = async (req, res) => {
  const result = await ListByCategoryServices(req);
  return res.json(result);
};

export const productListByRemark = async (req, res) => {
  const result = await ListByRemarkServices(req);
  return res.json(result);
};

export const productListByBrand = async (req, res) => {
  const result = await ListByBrandServices(req);
  return res.json(result);
};

export const productListBySlide = async (req, res) => {
  const result = await ListBySliderService();
  return res.json(result);
};

export const productDetailsById = async (req, res) => {
  const result = await DetailService(req);
  return res.json(result);
};

export const productListByKeyword = async (req, res) => {
  const result = await ListByKeywordService(req);
  return res.json(result);
};

export const productReviewListById = async (req, res) => {
  const result = await ReviewListService(req);
  return res.json(result);
};

export const productListByFilter = async (req, res) => {
  const result = await ListByFilterService(req);
  return res.json(result);
};

export const createProductReview = async (req, res) => {
  try {
    return res.json({ status: "Successful", message: "Successful" });
  } catch (err) {
    return res.json({ status: "Failed", message: err.toString() });
  }
};

export const updateProductReview = async (req, res) => {
  try {
    return res.json({ status: "Successful", message: "Successful" });
  } catch (err) {
    return res.json({ status: "Failed", message: err.toString() });
  }
};
