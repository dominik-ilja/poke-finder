import { getGeneralPokemonData } from "../api/api";

export default async function extractEvolutions(chain) {
  const evolutions = [];

  function parseChain({ species, evolves_to }, stage = 0) {
    const { name, url } = species;
    const id = Number(/\/(\d+)\/$/.exec(url)[1]);

    evolutions.push({ id, name, stage, url });

    if (evolves_to.length > 0) {
      evolves_to.forEach(evo => parseChain(evo, stage + 1));
    } else {
      return;
    }
  }

  parseChain(chain);

  const responses = await Promise.all(evolutions.map(evo => getGeneralPokemonData(evo.id)));
  evolutions.forEach((evo, index) => evo.data = responses[index]);

  return evolutions;
}
