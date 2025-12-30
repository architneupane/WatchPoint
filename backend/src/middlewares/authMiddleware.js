import jwt from "jsonwebtoken"
import ApiError from "../utils/ApiError.js";

const authMiddleware = (req, res, next) => {
    const token = req.cookies?.token;

    if (!token) {
      throw new ApiError(401, "Not Authenticate")
    }
    
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = {id: decoded.id};
    next();
  } catch (err) {
    throw new ApiError(401, "Invalid Token")
  }
};


export default authMiddleware