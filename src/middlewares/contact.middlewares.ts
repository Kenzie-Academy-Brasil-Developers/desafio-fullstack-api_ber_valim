import { NextFunction, Request, Response } from "express";
import { prisma } from "../app";
import AppError from "../errors/AppError.error";

export const validateContactEmailExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  if (!req.body.email) return next();

  const contact = await prisma.contact.findUnique({
    where: { email: req.body.email },
  });

  if (contact) throw new AppError("Contact email already exists", 409);

  return next();
};
