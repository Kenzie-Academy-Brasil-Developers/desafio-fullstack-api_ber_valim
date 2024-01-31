import { z } from "zod";
import {
  contactResponseSchema,
  createContactRequestSchema,
  readContactResponseSchema,
  readContactsResponseSchema,
  updateContactRequestSchema,
} from "../schemas/contact.schema";
import { readOneClientResponseSchema } from "../schemas/client.schema";

export type TcontactResponse = z.infer<typeof contactResponseSchema>;
export type TcreateContactRequest = z.infer<typeof createContactRequestSchema>;
export type TupdateContactRequest = z.infer<typeof updateContactRequestSchema>;
export type TreadContactsResponse = z.infer<typeof readContactsResponseSchema>;
export type TreadOneContactResponse = z.infer<typeof readContactResponseSchema>;
