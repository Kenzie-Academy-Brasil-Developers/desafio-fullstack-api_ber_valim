import { Router } from "express";
import {
  createContactController,
  deleteOneContactByIdController,
  readAllContactsController,
  readOneContactByIdController,
} from "../controller/contact.controller";
import {
  verifyAdmin,
  verifyContactPermission,
  verifyToken,
} from "../middlewares/security.middleware";
import {
  validateContactEmailExists,
  validateContactPhoneExists,
  verifyContactIdExists,
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
contactRouter.get("/", verifyToken, verifyAdmin, readAllContactsController);
contactRouter.get(
  "/:id",
  verifyContactIdExists,
  verifyToken,
  verifyContactPermission,
  readOneContactByIdController
);
contactRouter.delete(
  "/:id",
  verifyContactIdExists,
  verifyToken,
  verifyContactPermission,
  deleteOneContactByIdController
);
