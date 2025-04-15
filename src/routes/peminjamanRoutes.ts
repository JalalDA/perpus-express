import { Router } from "express";
import { createPeminjaman } from "../controllers/peminjamanControllers";
import prisma from "../prisma/prisma";

const peminjamanRouter = Router();

peminjamanRouter.post("/", createPeminjaman);

export default peminjamanRouter;
