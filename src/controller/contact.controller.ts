import { Request, Response } from "express";
import {
  createContactService,
  readAllContactsService,
} from "../services/contact.service";
import { TreadContactsResponse } from "../interfaces/contact.interface";

export const createContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { sub } = res.locals.decodeToken;
  const newContact = await createContactService(req.body, sub);
  return res.status(201).json(newContact);
};

export const readAllContactsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contacts: TreadContactsResponse = await readAllContactsService();
  return res.status(201).json(contacts);
};
