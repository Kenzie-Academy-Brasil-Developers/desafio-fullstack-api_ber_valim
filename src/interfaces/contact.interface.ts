import { z } from "zod";
import {
  contactResponseSchema,
  createContactRequestSchema,
  readContactsResponseSchema,
  updateContactRequestSchema,
} from "../schemas/contact.schema";

export type TcontactResponse = z.infer<typeof contactResponseSchema>;
export type TcreateContactRequest = z.infer<typeof createContactRequestSchema>;
export type TupdateContactRequest = z.infer<typeof updateContactRequestSchema>;
export type TreadContactsResponse = z.infer<typeof readContactsResponseSchema>;
