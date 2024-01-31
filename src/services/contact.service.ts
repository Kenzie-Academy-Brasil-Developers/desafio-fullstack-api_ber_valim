import { prisma } from "../app";
import AppError from "../errors/AppError.error";
import {
  TcontactResponse,
  TcreateContactRequest,
} from "../interfaces/contact.interface";
import { contactResponseSchema } from "../schemas/contact.schema";

export const createContactService = async (
  data: TcreateContactRequest,
  id: string
): Promise<TcontactResponse> => {
  const client = await prisma.client.findUnique({
    where: {
      id: id,
    },
  });
  console.log(id);

  if (!client) throw new AppError("Client Not Found!", 404);

  const newContact: TcontactResponse = await prisma.contact.create({
    data: {
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      client: {
        connect: {
          id: id,
        },
      },
    },
  });

  return contactResponseSchema.parse(newContact);
};
