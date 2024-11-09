// === Internal Import ===
import {
  createWishService,
  readWishListService,
  removeWishListService,
} from "../services/wishListServices.js";

export const createWish = async (req, res) => {
  const result = await createWishService(req);
  return res.json(result);
};

export const readWishList = async (req, res) => {
  const result = await readWishListService(req);
  return res.json(result);
};

export const removeWish = async (req, res) => {
  const result = await removeWishListService(req);
  return res.json(result);
};
