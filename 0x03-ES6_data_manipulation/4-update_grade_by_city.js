export default function updateStudentGradeByCity(list, city, newGrades) {
  return list
    .filter((list) => list.location === city)
    .map((list) => {
      const grades = newGrades.find((grade) => grade.studentId === list.id);
      const grade = grades ? grades.grade : 'N/A';
      return { ...list, grade };
    });
}
