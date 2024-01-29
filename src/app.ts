import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import { handleErrors } from "./middlewares/handleErrors.middleware";
import { allRoutes } from "./routers";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export const app: Application = express();

app.use(express.json());

app.use("/", allRoutes);

app.use(handleErrors);
