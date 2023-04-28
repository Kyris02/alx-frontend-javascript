export default function getStudentIdsSum(students) {
  const initialValue = 0;
  return students.reduce((preVal, curVal) => preVal + curVal.id, initialValue);
}
