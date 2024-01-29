import { Router } from "express";
import { createClientController } from "../controller/client.controller";
import { validateBody } from "../middlewares/validateBody.middleware";
import { createClientRequestSchema } from "../schemas/client.schema";

export const clientRouter: Router = Router();

clientRouter.post(
  "/",
  validateBody(createClientRequestSchema),
  createClientController
);
