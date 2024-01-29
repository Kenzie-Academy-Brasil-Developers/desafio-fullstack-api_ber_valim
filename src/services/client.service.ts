import { hash } from "bcryptjs";
import {
  TclientResponseWithoutPassword,
  TcreateClientRequest,
  TreadClientsList,
} from "../interfaces/client.interface";
import { prisma } from "../app";
import {
  clientResponseWithoutPasswordSchema,
  clientsListResponseSchema,
} from "../schemas/client.schema";

export const createClientService = async (
  data: TcreateClientRequest
): Promise<TclientResponseWithoutPassword> => {
  data.password = await hash(data.password, 12);
  const newClient: TclientResponseWithoutPassword = await prisma.client.create({
    data,
  });
  return clientResponseWithoutPasswordSchema.parse(newClient);
};

export const readClientsService = async (): Promise<TreadClientsList> => {
  const clients: TreadClientsList = await prisma.client.findMany();
  return clientsListResponseSchema.parse(clients);
};

export const readClientsByIdService = async (
  id: string
): Promise<TclientResponseWithoutPassword> => {};
