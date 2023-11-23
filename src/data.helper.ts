import prisma from "./client";

export const getTotalStudentsCount = () => {
  return prisma.student.count();
};

export const getAverageAgeOfStudents = async () => {
  const avg = await prisma.student.aggregate({ _avg: { age: true } });
  return avg._avg.age;
};

export const getTotalClassesCount = () => {
  return prisma.class.count();
};
