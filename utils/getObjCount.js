export function getObjCount(obj) {
  if (!Object.keys(obj)) return 0;
  return Object.keys(obj).length;
}
