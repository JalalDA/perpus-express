import { Router } from "express";
import { createBuku, getBuku } from "../controllers/bookControllers";

const bukuRouter = Router();

bukuRouter.post("/", createBuku);
bukuRouter.get("/", getBuku);

export default bukuRouter;
