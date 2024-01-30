import { prisma } from "../app";
import AppError from "../errors/AppError.error";
import { TcontactResponse } from "../interfaces/contact.interface";
import { contactResponseSchema } from "../schemas/contact.schema";

export const createContactService = async (
  data: any,
  id: string
): Promise<TcontactResponse> => {
  const client = await prisma.client.findUnique({
    where: {
      id: id,
    },
  });

  if (!client) throw new AppError("Client Not Found!", 404);

  const newContact: TcontactResponse = await prisma.contact.create({ data });

  return contactResponseSchema.parse(newContact);
};
