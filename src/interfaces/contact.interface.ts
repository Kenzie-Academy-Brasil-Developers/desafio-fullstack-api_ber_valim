import { z } from "zod";
import {
  contactResponseSchema,
  createContactRequestSchema,
} from "../schemas/contact.schema";

export type TcontactResponse = z.infer<typeof contactResponseSchema>;
export type TcreateContactRequest = z.infer<typeof createContactRequestSchema>;
