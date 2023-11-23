import express from "express";
import { prepareSummarizedResponse } from "../summary";
import { getStudentById, getStudents } from "../crud/crud.helper";

const router = express.Router();

router.get("/student/:id", async (req, res) => {
  const student = await getStudentById(req.params.id);
  res.json({ student });
});

router.get("/students", async (req, res) => {
  const students = await getStudents(
    req.query.skip as string,
    req.query.take as string
  );

  res.json({ students });
});

export default router;
