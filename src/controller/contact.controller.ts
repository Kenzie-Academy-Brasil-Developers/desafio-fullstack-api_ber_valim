import { Request, Response } from "express";
import {
  createContactService,
  readAllContactsService,
  readOneContactByIdService,
} from "../services/contact.service";
import {
  TreadContactsResponse,
  TreadOneContactResponse,
} from "../interfaces/contact.interface";

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

export const readOneContactByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { contact } = res.locals;
  const oneContact: TreadOneContactResponse = await readOneContactByIdService(
    contact
  );
  return res.status(200).json(oneContact);
};
