import { Router } from "express";
import { createClientController } from "../controller/client.controller";

export const clientRouter: Router = Router();

clientRouter.post("/", createClientController);
