import {
  getTotalStudentsCount,
  getAverageAgeOfStudents,
  getTotalClassesCount,
} from "./data.helper";

export const prepareSummarizedResponse = async () => {
  const totalStudents = await getTotalStudentsCount();
  const averageAge = await getAverageAgeOfStudents();
  const totalClasses = await getTotalClassesCount();
  return { totalStudents, averageAge, totalClasses };
};
