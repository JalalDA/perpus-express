import { Router } from "express";
import { getHistoryReport } from "../controllers/historyControllers";

const historyRouter = Router();

historyRouter.get("/", getHistoryReport);

export default historyRouter;
