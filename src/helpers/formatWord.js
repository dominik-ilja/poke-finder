export default function formatWord(word) {
  if (typeof word !== "string" || word.length <= 1) {
    return word;
  }

  const words = word.split("-");
  // uppercases first letter and lowercase remaining letters
  return words.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ");

}
