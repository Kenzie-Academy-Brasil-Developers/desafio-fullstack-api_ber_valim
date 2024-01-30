import { z } from "zod";
import { contactResponseSchema } from "../schemas/contact.schema";

export type TContactResponse = z.infer<typeof contactResponseSchema>;
// export
