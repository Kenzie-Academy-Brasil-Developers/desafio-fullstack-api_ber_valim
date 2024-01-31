import { Request, Response } from "express";
import { createContactService } from "../services/contact.service";

export const createContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { sub } = res.locals.decodeToken;
  console.log(res.locals);
  const newContact = await createContactService(req.body, sub);
  return res.status(201).json(newContact);
};
