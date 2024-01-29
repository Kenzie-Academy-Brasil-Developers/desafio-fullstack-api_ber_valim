import { z } from "zod";

export const clientResponseSchema = z.object({
  id: z.string(),
  fullName: z.string().min(3).max(80),
  email: z.string().email().min(3).max(45),
  admin: z.boolean().default(false),
  password: z.string().max(120).min(3),
  phone: z.string().max(18),
  createdAt: z.string(),
});

// export const createClientRequest
