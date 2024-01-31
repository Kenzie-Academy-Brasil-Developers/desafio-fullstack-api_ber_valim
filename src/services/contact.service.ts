import { prisma } from "../app";
import AppError from "../errors/AppError.error";
import {
  TcontactResponse,
  TcreateContactRequest,
  TreadContactsResponse,
  TreadOneContactResponse,
} from "../interfaces/contact.interface";
import {
  contactResponseSchema,
  readContactResponseSchema,
  readContactsResponseSchema,
} from "../schemas/contact.schema";
import { Contact } from ".prisma/client";

export const createContactService = async (
  data: TcreateContactRequest,
  id: string
): Promise<TcontactResponse> => {
  const client = await prisma.client.findUnique({
    where: {
      id: id,
    },
  });

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

export const readAllContactsService =
  async (): Promise<TreadContactsResponse> => {
    const contacts: TreadContactsResponse = await prisma.contact.findMany({
      include: { client: true },
    });
    return readContactsResponseSchema.parse(contacts);
  };

export const readOneContactByIdService = async (
  contact: Contact
): Promise<TreadOneContactResponse> => {
  const oneContact: Contact | null = await prisma.contact.findUnique({
    where: {
      id: contact.id,
    },
    include: {
      client: true,
    },
  });
  return readContactResponseSchema.parse(oneContact);
};

export const deleteOneContactByIdService = async (
  contact: Contact
): Promise<void> => {
  await prisma.contact.delete({ where: { id: contact.id } });
};
