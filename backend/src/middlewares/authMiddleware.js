import jwt from "jsonwebtoken"
import ApiError from "../utils/ApiError.js";

export const userAuth = (req, res, next) => {
    const token = req.cookies?.token;

    if (!token) {
      return next(new ApiError(401, "Not Authenticate"))
    }
    
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    next()
  } catch (err) {
    next(new ApiError(401, "Invalid Token"))
  }
};

export const adminAuth = (req, res, next) => {
  const token = req.cookies?.token;

  if (!token) {
    return next(new ApiError(401, 'Not Authenticated'));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    if (req.user?.role === 'admin') {
      next();
    } else {
      next(new ApiError(403, 'Access denied: Admins only'));
    }
  } catch (error) {
    next(new ApiError(401, "Invalid or Expired Token"));
  }
};