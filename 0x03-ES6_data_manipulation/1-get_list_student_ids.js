export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    const array = [];
    return array;
  }
  return array.map((array) => array.id);
}
