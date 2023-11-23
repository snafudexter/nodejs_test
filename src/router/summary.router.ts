import express from "express";
import { prepareSummarizedResponse } from "../summary";

const router = express.Router();

router.get("/", async (req, res) => {
  const responseJson = await prepareSummarizedResponse();
  res.json({
    ...responseJson,
  });
});

export default router;
