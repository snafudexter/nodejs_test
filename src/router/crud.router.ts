import express from "express";
import { prepareSummarizedResponse } from "../summary";
import {
  createStudents,
  getStudentById,
  getStudents,
  softDeleteStudentById,
  updateStudentById,
} from "../crud/crud.helper";

const router = express.Router();

router.post("/students", async (req, res) => {
  const buffer = req.body.students;
  const students = await createStudents(buffer);
  res.json(students);
});

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

router.delete("/student/:id", async (req, res) => {
  const deletedStudent = await softDeleteStudentById(req.params.id);
  res.json({ deletedStudent });
});

router.put("/student/:id", async (req, res) => {
  const updatedStudent = await updateStudentById(
    req.params.id,
    req.body.student
  );

  res.json({ updatedStudent });
});

export default router;
