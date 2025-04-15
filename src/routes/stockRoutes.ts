import { Router } from "express";
import { tambahStok } from "../controllers/stockControllers";

const router = Router();

router.post("/", tambahStok);

export default router;