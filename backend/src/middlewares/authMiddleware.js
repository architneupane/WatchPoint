import jwt from "jsonwebtoken"
import ApiError from "../utils/ApiError.js";

export const authMiddleware = (req, res, next) => {
    const token = req.cookies?.token;

    if (!token) {
      throw new ApiError(401, "Not Authenticate")
    }
    
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    if(req.user?.role !== "admin"){
    throw new ApiError(403, "Admin access only")
    }
    next();
  } catch (err) {
    throw new ApiError(401, "Invalid Token")
  }
};
