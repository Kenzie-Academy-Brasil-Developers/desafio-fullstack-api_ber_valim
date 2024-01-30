import { z } from "zod";

export const contactResponseSchema = z.object({
  id: z.string(),
  fullName: z.string().min(3).max(80),
  email: z.string().email().min(3).max(45),
  phone: z.string().max(18),
  createdAt: z.date(),
  client_id: z.string(),
});
