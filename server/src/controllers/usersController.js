import {
  CreateUserProfileService,
  LoginService,
  LoginVerifyService,
  ReadUserProfileService,
  UpdateUserProfileService,
} from "../services/userServices.js";

export const login = async (req, res) => {
  const result = await LoginService(req);
  return res.json(result);
};

export const loginVerify = async (req, res) => {
  const result = await LoginVerifyService(req, res);
  return res.json(result);
};

export const createUserProfile = async (req, res) => {
  const result = await CreateUserProfileService(req);
  return res.json(result);
};

export const updateUserProfile = async (req, res) => {
  const result = await UpdateUserProfileService(req);
  return res.json(result);
};

export const readUserProfile = async (req, res) => {
  const result = await ReadUserProfileService(req);
  return res.json(result);
};

export const userLogout = async (req, res) => {};
