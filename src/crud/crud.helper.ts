import prisma from "../prisma_client";

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

  if (parsedSkip)
    return prisma.student.findMany({
      take: parsedTake,
      skip: parsedSkip ? parsedSkip : 10,
    });
  else
    return {
      error: "Invalid values provided for Take and Skip",
    };
};

interface IStudent {
  name: string;
  age: number;
  grade: number;
}

export const updateStudentById = async (id: string, student: IStudent) => {
  const parsedId = parseInt(id);
  if (parsedId) {
    await prisma.student.update({
      where: { id: parsedId },
      data: { ...student },
    });

    return {
      message: `Student with Id: ${parsedId} updated`,
    };
  } else {
    return {
      error: "Invalid value provided for Student Id",
    };
  }
};
