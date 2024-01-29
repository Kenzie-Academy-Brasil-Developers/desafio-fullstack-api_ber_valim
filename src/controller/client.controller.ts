import { Request, Response } from "express";
import { TclientResponseWithoutPassword } from "../interfaces/client.interface";
import { createClientService } from "../services/client.service";

export const createClientController = async (req: Request, res: Response) => {
  const newClient = createClientService(req.body);
  return res.status(201).json(newClient);
};
