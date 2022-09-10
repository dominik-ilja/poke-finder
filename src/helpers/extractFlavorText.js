export default function extractflavorText(flavorTexts) {
  const lang = "en";
  const text = flavorTexts.find(entry => entry.language.name === lang);

  // Some of the flavor text contains /u000c which is a "form feed" character.
  // Sources say it should render as whitespace, but it wasn't. 
  // The regex detects the form feed as whitespace and then makes it a proper space character
  return text.flavor_text.replaceAll(/\s/g, " ");
}
