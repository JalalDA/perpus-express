import { Router } from "express";
import { createRak, getAllRak } from "../controllers/rakControllers";

const rakRouter = Router();

rakRouter.post("/", createRak);
rakRouter.get("/", getAllRak);

export default rakRouter