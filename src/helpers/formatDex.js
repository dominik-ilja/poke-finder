export default function formatDex(id) {
  if (typeof id !== "number" && typeof id !== "string") {
    throw new Error(`${id} must be a number or a string`);
  } else if (typeof id === "number") {
    id = String(id);
  }

  const dexLength = 3;

  if (id.length < dexLength) {
    for (let i = 0; i <= dexLength - id.length; i++) {
      id = "0" + id;
    }
  }

  return "#" + id;
}
