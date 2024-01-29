import { Router } from "express";
import {
  createClientController,
  readClientsByIdController,
  readClientsController,
} from "../controller/client.controller";
import { validateBody } from "../middlewares/validateBody.middleware";
import { createClientRequestSchema } from "../schemas/client.schema";
import { validateEmailExists } from "../middlewares/validateEmailExists.middleware";
import { validatePhoneExists } from "../middlewares/validatePhoneExists.middleware";
import {
  verifyAdmin,
  verifyPermission,
  verifyToken,
} from "../middlewares/security.middleware";
import { verifyClientIdExists } from "../middlewares/verifyClientIdExists.middleware";

export const clientRouter: Router = Router();

clientRouter.post(
  "/",
  validateBody(createClientRequestSchema),
  validateEmailExists,
  validatePhoneExists,
  createClientController
);
clientRouter.get("/", verifyToken, verifyAdmin, readClientsController);
clientRouter.get(
  "/:id",
  verifyClientIdExists,
  verifyToken,
  verifyPermission,
  readClientsByIdController
);
