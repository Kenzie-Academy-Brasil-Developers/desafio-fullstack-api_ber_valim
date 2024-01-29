import { Request, Response } from "express";
import {
  createClientService,
  readClientsService,
} from "../services/client.service";

export const createClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newClient = await createClientService(req.body);
  return res.status(201).json(newClient);
};

export const readClientsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clients = await readClientsService();
  return res.status(200).json(clients);
};
