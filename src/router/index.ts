import express from "express";
import summaryRouter from "./summary.router";
import crudRouter from "./crud.router";

const router = express.Router();

router.use("/summary", summaryRouter);
router.use("/crud", crudRouter);

export default router;
