import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { v4 as uuid } from "uuid";

import Title from "../components/Title";
import Text from "../components/Text";
import Type from "../components/Type";
import SubTitle from "../components/SubTitle";
import Spinner from "../components/Spinner";

import {
  formatDex,
  formatMeasurement,
  formatWord,
} from "../utilities/utilities";
import MovePokemonPage from "../components/MovePokemonPage";

function formatStat(stat) {
  switch (stat) {
    case "hp":
      return "HP";
    case "attack":
      return "ATK";
    case "defense":
      return "DEF";
    case "special-attack":
      return "SP. ATK";
    case "special-defense":
      return "SP. DEF";
    case "speed":
      return "SPD";
    default:
      throw new Error("Unexpected Case!");
  }
}

export default function Pokemon(props) {
  const { pokemonid } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getInfo() {
      try {
        const base_url = "https://pokeapi.co/api/v2/";
        const endpoint = "pokemon/";
        const id = Number(pokemonid);
        const generalInfo = await axios.get(base_url + endpoint + id);
        const speciesInfo = await axios.get(generalInfo.data.species.url);
        const firstEntry = 1;
        const lastEntry = 905;
        let next = null;
        let prev = null;

        // get next pokemon entry
        if (id < lastEntry) {
          const response = await axios.get(base_url + endpoint + (id + 1));
          next = response.data;
        }

        // get previous pokemon entry
        if (id > firstEntry) {
          const response = await axios.get(base_url + endpoint + (id - 1));
          prev = response.data;
        }

        const data = {
          ...generalInfo.data,
          ...speciesInfo.data,
          next,
          prev,
        };
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }
    getInfo();
  }, [pokemonid]);

  console.log(useParams());
  console.log("data: ", data);

  if (data === null) {
    return <Spinner />;
  } else {
    console.log(data.weight);
    console.log("next: ", data.next);
    console.log("prev: ", data.prev);
    return (
      <>
        <Title className="capitalize">{data.name}</Title>

        <div className="flex justify-center items-center">
          <img
            src={data.sprites.other["official-artwork"].front_default}
            alt=""
          />
        </div>

        <Text className="text-center">
          {data.flavor_text_entries[0].flavor_text}
        </Text>

        {/* Stats */}
        <SubTitle>Stats</SubTitle>
        <div className="grid grid-cols-3 gap-2 mb-8">
          {/* Stat */}
          {data.stats.map(stat => {
            return (
              <div key={uuid()}>
                <div className="font-semibold text-center uppercase bg-light">
                  {formatStat(stat.stat.name)}
                </div>
                <div className="text-center">{stat.base_stat}</div>
              </div>
            );
          })}
        </div>

        {/* Type */}
        <SubTitle>Type</SubTitle>
        <div className="flex gap-x-2 justify-center mb-8">
          {data.types.map(({ type }) => (
            <Type key={uuid()} type={type.name} />
          ))}
        </div>

        {/* Abilities */}
        <SubTitle>Abilities</SubTitle>
        <div className="flex gap-x-2 justify-center mb-8 capitalize">
          {data.abilities.map(({ ability }) => (
            <div key={uuid()}>{formatWord(ability.name)}</div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-y-8 mb-8">
          {/* Dex */}
          <div className="flex flex-col items-center">
            <SubTitle>Dex</SubTitle>
            <div>{formatDex(data.id)}</div>
          </div>
          {/* Height */}
          <div className="flex flex-col items-center">
            <SubTitle>Height</SubTitle>
            <div>{formatMeasurement(data.height)} m</div>
          </div>
          {/* Weight */}
          <div className="flex flex-col items-center">
            <SubTitle>Weight</SubTitle>
            <div>{formatMeasurement(data.weight)} kg</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-y-8 mb-8">
          {/* Growth */}
          <div className="flex flex-col items-center">
            <SubTitle>Growth</SubTitle>
            <div className="capitalize">
              {formatWord(data.growth_rate.name)}
            </div>
          </div>
          {/* Habitat */}
          <div className="flex flex-col items-center">
            <SubTitle>Habitat</SubTitle>
            <div className="capitalize">{formatWord(data.habitat.name)}</div>
          </div>

          {/* Egg Groups */}
          <div className="flex flex-col items-center">
            <SubTitle>Egg Groups</SubTitle>
            {data.egg_groups.map(({ name }) => (
              <div className="capitalize">{name}</div>
            ))}
          </div>
          {/* Base Happiness */}
          <div className="flex flex-col items-center">
            <SubTitle>Base Happiness</SubTitle>
            <div>{data.base_happiness}</div>
          </div>
        </div>

        {/* Evolution Line */}
        <SubTitle className="mb-8">Evolution Line</SubTitle>

        {/* Next / Prev Entry */}
        <div className="flex justify-between mb-8">
          <div>
            {data.prev && (
              <MovePokemonPage
                href={`/pokemon/${data.prev.id}`}
                src={data.prev.sprites.front_default}
                type="left"
              />
            )}
          </div>
          <div>
            {data.next && (
              <MovePokemonPage
                href={`/pokemon/${data.next.id}`}
                src={data.next.sprites.front_default}
              />
            )}
          </div>
        </div>
      </>
    );
  }
}
