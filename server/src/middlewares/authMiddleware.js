// Internal Imports
import { TokenDecoded } from "../utility/tokenUtility.js";

// Middleware for verifying JWT token
export const AuthMiddleware = (req, res, next) => {
  // Check if token is in headers or cookies
  let token = null;
  if (req.headers["token"]) {
    token = req.headers["token"];
  }
  // If token not found in headers, try cookies
  if (!token) {
    token = req.cookies["token"];
  }

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
