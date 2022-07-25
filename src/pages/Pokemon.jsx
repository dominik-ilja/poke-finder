import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import formatDex from "../helpers/formatDex"

import Container from "../components/ui/Container"
import Title from "../components/ui/Title";
import SubTitle from "../components/ui/SubTitle"
import Spinner from "../components/ui/Spinner";

import { getPokemonPageData } from "../api/api";
import extractflavorText from "../helpers/extractFlavorText";
import PokemonStatContainer from "../components/pokemon/PokemonStatContainer";
import PokemonText from "../components/pokemon/PokemonText";
import PokemonPicture from "../components/pokemon/PokemonPicture";
import PokemonEvolutions from "../components/pokemon/PokemonEvolutions";
import formatMeasurement from "../helpers/formatMeasurement"
import PokemonMovePage from "../components/pokemon/PokemonMovePage";
import PokemonMainInfo from "../components/pokemon/PokemonMainInfo";
import PokemonAdditionalInfo from "../components/pokemon/PokemonAdditionalInfo";

export default function Pokemon(props) {
  const { pokemonid } = useParams();
  const [pokemonInfo, setPokemonInfo] = useState({})
  
  useEffect(() => {
    async function getInfo() {
      const info = await getPokemonPageData(pokemonid)
      setPokemonInfo(info);
    }
    getInfo();
  }, [pokemonid])


  if (Object.keys(pokemonInfo).length === 0) {
    return <Spinner fill="#fff" className="w-32" />
  }
  else {
    const additionalInfo = [
      {
        title: "Height",
        value: `${formatMeasurement(pokemonInfo.height)} m`
      },
      {
        title: "Weight",
        value: `${formatMeasurement(pokemonInfo.weight)} kg`
      },
      {
        title: "Base Happiness",
        value: pokemonInfo.base_happiness
      },
      {
        title: "Base Experience",
        value: pokemonInfo.base_experience
      },
      {
        title: "Capture Rate",
        value: pokemonInfo.capture_rate
      },
      {
        title: "Color",
        value: pokemonInfo.color.name
      },
      {
        title: "Egg Groups",
        value: pokemonInfo.egg_groups
      },
      {
        title: "Habitat",
        value: pokemonInfo.habitat ? pokemonInfo.habitat.name : "unknown"
      },
    ]

    return (
      <Container>
        <Title className={`capitalize mb-14 text-2xl text-white`}>{pokemonInfo.name} {formatDex(pokemonInfo.id)}</Title>
        
        <div className="flex flex-col items-center justify-between mb-12 gap-y-12 md:mb-24 lg:flex-row">
          <PokemonPicture sprite={pokemonInfo.sprites.other['official-artwork'].front_default} alt={pokemonInfo.name} />
          <PokemonText className="text-center">{extractflavorText(pokemonInfo.flavor_text_entries)}</PokemonText>
        </div>
        
        <div className="flex flex-col mb-12 gap-y-12 justify-evenly md:mb-24 md:flex-row">
          <PokemonStatContainer className="flex-1" stats={pokemonInfo.stats} type={pokemonInfo.types[0].type.name} />
          <PokemonMainInfo
            types={pokemonInfo.types}
            abilities={pokemonInfo.abilities}
            growth={pokemonInfo.growth_rate.name}
          />
        </div>
        
        {/* evolutions */}
        <div className="mb-24">
          <SubTitle className="text-center">Evolutions</SubTitle>
          <PokemonEvolutions evolutions={pokemonInfo.evolutionInfo} id={pokemonInfo.id} />
        </div>
        
        {/* additional info */}
        <PokemonAdditionalInfo
          info={additionalInfo}
          type={pokemonInfo.types[0].type.name}
        />

        {/* Next / Prev Entry */}
        <div className="flex">
            {pokemonInfo.prev && (
              <PokemonMovePage
                href={`/pokemon/${pokemonInfo.prev.id}`}
                src={pokemonInfo.prev.sprites.front_default}
                type="left"
              />
            )}

            {pokemonInfo.next && (
              <PokemonMovePage
                  href={`/pokemon/${pokemonInfo.next.id}`}
                  src={pokemonInfo.next.sprites.front_default}
                />
            )}
        </div>
      </Container>
    );

  }

};
