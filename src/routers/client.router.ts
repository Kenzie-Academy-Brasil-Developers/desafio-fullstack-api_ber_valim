import { Router } from "express";
import {
  createClientController,
  readClientsController,
} from "../controller/client.controller";
import { validateBody } from "../middlewares/validateBody.middleware";
import { createClientRequestSchema } from "../schemas/client.schema";
import { validateEmailExists } from "../middlewares/validateEmailExists.middleware";
import { validatePhoneExists } from "../middlewares/validatePhoneExists.middleware";
import { verifyAdmin, verifyToken } from "../middlewares/security.middleware";

export const clientRouter: Router = Router();

clientRouter.post(
  "/",
  validateBody(createClientRequestSchema),
  validateEmailExists,
  validatePhoneExists,
  createClientController
);
clientRouter.get("/", verifyToken, verifyAdmin, readClientsController);
