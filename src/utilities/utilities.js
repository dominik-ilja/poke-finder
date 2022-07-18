export function formatDex(id) {
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

export function formatMeasurement(measurement) {
  console.log(measurement / 10);
  return (measurement / 10).toFixed(1);
}

export function formatWord(word) {
  if (typeof word !== "string" || word.length <= 1) {
    return word;
  }

  const words = word.split("-");
  // uppercases first letter and lowercase remaining letters
  return words.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ");

}
