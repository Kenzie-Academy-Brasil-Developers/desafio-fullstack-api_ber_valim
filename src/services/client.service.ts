import { hash } from "bcryptjs";
import {
  TclientResponseWithoutPassword,
  TcreateClientRequest,
} from "../interfaces/client.interface";
import { prisma } from "../app";
import { clientResponseWithoutPasswordSchema } from "../schemas/client.schema";

export const createClientService = async (
  data: TcreateClientRequest
): Promise<TclientResponseWithoutPassword> => {
  data.password = await hash(data.password, 12);
  const newClient: TclientResponseWithoutPassword = await prisma.client.create({
    data,
  });
  return clientResponseWithoutPasswordSchema.parse(newClient);
};
