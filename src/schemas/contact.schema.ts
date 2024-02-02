import { z } from "zod";

export const contactResponseSchema = z.object({
  id: z.string(),
  fullName: z.string().min(3).max(80),
  email: z.array(z.string().email().min(3).max(45).nullable()),
  phone: z.array(z.string().max(18).nullable()),
  createdAt: z.date(),
  client_id: z.string(),
});

export const readContactResponseSchema = z.object({
  id: z.string(),
  fullName: z.string().min(3).max(80),
  email: z.array(z.string().email().max(45)),
  phone: z.array(z.string().max(18)),
  createdAt: z.date(),
  client_id: z.string(),
  client: z.object({
    fullName: z.string().min(3).max(80),
    email: z.string().email().min(3).max(45),
    admin: z.boolean().default(false),
    phone: z.string().max(18),
    createdAt: z.date(),
  }),
});
export const readContactsResponseSchema = readContactResponseSchema.array();

export const createContactRequestSchema = z.object({
  fullName: z.string().min(3).max(80),
  email: z.array(z.string().email().min(3).max(45)),
  phone: z.array(z.string().max(18)),
});

export const updateContactRequestSchema = createContactRequestSchema.partial();
