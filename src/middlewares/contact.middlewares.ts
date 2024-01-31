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

export const validateContactPhoneExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  if (!req.body.phone) return next();

  const client = await prisma.contact.findUnique({
    where: { phone: req.body.phone },
  });

  if (client) throw new AppError("Contact Phone Already exists", 409);

  return next();
};

export const verifyContactIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;

  const contact = await prisma.contact.findUnique({
    where: { id },
  });

  if (!contact) throw new AppError("Client not found", 404);

  res.locals = { ...res.locals, contact };

  return next();
};
