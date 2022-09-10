import axios from "axios";
import extractEvolutions from "../helpers/extractEvolutions";

const BASE_URL = "https://pokeapi.co/api/v2/";
const GENERAL_ENDPOINT = "pokemon/";
const SPECIES_ENDPOINT = "pokemon-species/";

export async function getPokemonData(limit = 3) {
  try {

    const result = await axios.get(BASE_URL + `pokemon?limit=${limit}&offset=0`)
      .then(res => {
        const requests = res.data.results.map(result => axios.get(result.url));
        return Promise.all(requests);
      })
      .then(res => {
        return res.map(item => item.data);
      });

    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function getGeneralPokemonData(id) {
  try {
    const { data } = await axios.get(BASE_URL + GENERAL_ENDPOINT + id);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getPokemonPageData(id) {
  id = Number(id);

  try {
    // const { data } = await axios.get(BASE_URL + SPECIES_ENDPOINT + id);
    const data = await axios.get(BASE_URL + GENERAL_ENDPOINT + id)
      .then(async (res) => {
        const specieInfo = await axios.get(res.data.species.url);
        return { ...specieInfo.data, ...res.data };
      })
      .then(async (res) => {
        const evolutionInfo = await axios.get(res.evolution_chain.url)
          .then(async res => {
            const data = await extractEvolutions(res.data.chain);
            console.log(data);
            return data;
          });
        console.log(evolutionInfo);

        return { ...res, evolutionInfo };
      })
      .then(async (res) => {
        // get prev and next info
        const prevId = id - 1;
        const nextId = id + 1;
        const firstEntry = 1;
        const lastEntry = 905;

        if (id < lastEntry) {
          const { data } = await axios.get(BASE_URL + GENERAL_ENDPOINT + nextId);
          res.next = data;
        }

        if (id > firstEntry) {
          const { data } = await axios.get(BASE_URL + GENERAL_ENDPOINT + prevId);
          res.prev = data;
        }

        return res;
      });


    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
