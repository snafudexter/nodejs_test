import { Student } from "@prisma/client";
import prisma from "../prisma_client";

export const createStudents = async (students: Student[]) => {
  return Promise.all(
    students.map(async (student: Student) => {
      return prisma.student.create({ data: { ...student } });
    })
  );
};

export const getStudentById = async (id: string) => {
  const parsedId = parseInt(id);
  if (parsedId) return prisma.student.findUnique({ where: { id: parsedId } });
  else
    return {
      error: "Invalid value provided for Student Id",
    };
};

export const getStudents = async (skip: string, take: string) => {
  const parsedSkip = parseInt(skip);
  const parsedTake = parseInt(take);

  return prisma.student.findMany({
    take: parsedTake ? parsedTake : 10,
    skip: parsedSkip ? parsedSkip : 0,
    where: {
      deletedAt: null,
    },
  });
};

export const updateStudentById = async (id: string, student: Student) => {
  const parsedId = parseInt(id);
  if (parsedId) {
    return prisma.student.update({
      where: { id: parsedId },
      data: { ...student },
    });
  } else {
    return {
      error: "Invalid value provided for Student Id",
    };
  }
};

export const softDeleteStudentById = async (id: string) => {
  const parsedId = parseInt(id);
  if (parsedId) {
    return prisma.student.update({
      where: { id: parsedId },
      data: { deletedAt: new Date() },
    });
  } else
    return {
      error: "Invalid value provided for Student Id",
    };
};
