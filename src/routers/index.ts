import { Router } from "express";
import { clientRouter } from "./client.router";

export const allRoutes: Router = Router();

allRoutes.use("/clients", clientRouter);
