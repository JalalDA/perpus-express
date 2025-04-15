import { Router } from "express";
import { createMahasiswa, getMahasiswa } from "../controllers/mahasiswaControllers";

const mahasiswaRouter = Router();

mahasiswaRouter.post("/", createMahasiswa);
mahasiswaRouter.get("/", getMahasiswa);

export default mahasiswaRouter;