import { z } from "zod";
import {
  clientWithoutAdminSchema,
  createClientRequestSchema,
  clientResponseWithoutPasswordSchema,
} from "../schemas/client.schema";

export type TcreateClientRequest = z.infer<typeof createClientRequestSchema>;
export type TclientWithoutAdmin = z.infer<typeof clientWithoutAdminSchema>;
export type TupdateClientRequest = Partial<TclientWithoutAdmin>;
export type TclientResponseWithoutPassword = z.infer<
  typeof clientResponseWithoutPasswordSchema
>;
export type TreadClientsList = TclientResponseWithoutPassword[];
export 
