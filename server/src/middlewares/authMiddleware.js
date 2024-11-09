// Internal Imports
import { TokenDecoded } from "../utility/tokenUtility.js";

// Middleware for verifying JWT token
export const AuthMiddleware = (req, res, next) => {
  const token = req.headers["token"];
  // Decode the token
  const decodedToken = TokenDecoded(token);

  if (decodedToken === null) {
    return res.json({ status: "Failed", message: "Unauthorize" });
  } else {
    const email = decodedToken.email;
    const user_id = decodedToken.user_id;
    req.headers.email = email;
    req.headers.user_id = user_id;
    next();
  }
};
