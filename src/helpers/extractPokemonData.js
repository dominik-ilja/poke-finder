import formatDex from "./formatDex";
import extractTyping from "./extractTyping";


// This will
export default function extractPokemonData(item) {
  const id = item.id;
  const dex = formatDex(item.id);
  const name = item.name;
  const sprite = item.sprites.front_default;
  const type = extractTyping(item.types);

  return { dex, id, name, sprite, type };
}
