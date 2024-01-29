import "dotenv/config";
import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppError.error";
import { verify } from "jsonwebtoken";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { authorization } = req.headers;

  if (!authorization) throw new AppError("Missing Bearer Token", 401);

  const getToken = authorization.split(" ")[1];

  const decodeToken = verify(getToken, process.env.SECRET_KEY!);

  res.locals = { ...res.locals, decodeToken };

  return next();
};

export const verifyAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { admin } = res.locals.decodeToken;

  if (!admin) throw new AppError("Insufficient Permissions", 403);

  return next();
};
