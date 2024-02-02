import { z } from "zod";
import {
  contactResponseSchema,
  createContactRequestSchema,
  readContactResponseSchema,
  readContactsResponseSchema,
} from "../schemas/contact.schema";

export type TcontactResponse = z.infer<typeof contactResponseSchema>;
export type TcreateContactRequest = z.infer<typeof createContactRequestSchema>;
export type TupdateContactRequest = Partial<TcreateContactRequest>;
export type TreadContactsResponse = z.infer<typeof readContactsResponseSchema>;
export type TreadOneContactResponse = z.infer<typeof readContactResponseSchema>;
