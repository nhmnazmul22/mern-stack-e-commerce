// === Internal Imports ===
import {
  createCartService,
  deleteCartService,
  readCartService,
  updateCartService,
} from "../services/cartServices.js";

export const createCart = async (req, res) => {
  const result = await createCartService(req);
  return res.json(result);
};

export const readCartList = async (req, res) => {
  const result = await readCartService(req);
  return res.json(result);
};

export const updateCart = async (req, res) => {
  const result = await updateCartService(req);
  return res.json(result);
};

export const removeCart = async (req, res) => {
  const result = await deleteCartService(req);
  return res.json(result);
};
