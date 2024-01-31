import { Router } from "express";
import { createContactController } from "../controller/contact.controller";
import { verifyAdmin, verifyToken } from "../middlewares/security.middleware";
import {
  validateContactEmailExists,
  validateContactPhoneExists,
} from "../middlewares/contact.middlewares";
import { validateBody } from "../middlewares/validateBody.middleware";
import { createContactRequestSchema } from "../schemas/contact.schema";

export const contactRouter: Router = Router();

contactRouter.post(
  "/",
  validateBody(createContactRequestSchema),
  verifyToken,
  validateContactEmailExists,
  validateContactPhoneExists,
  createContactController
);
