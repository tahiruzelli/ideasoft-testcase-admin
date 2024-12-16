export function isNumber(value: any) {
  if (Number.isNaN(value)) {
    return false;
  }
  return typeof value === "number";
}
