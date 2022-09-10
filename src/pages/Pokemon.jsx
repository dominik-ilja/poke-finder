import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import formatDex from "../helpers/formatDex"

import Container from "../components/ui/Container"
import Title from "../components/ui/Title";
import SubTitle from "../components/ui/SubTitle"
import Spinner from "../components/ui/Spinner";
import Type from "../components/ui/Type"

import { getPokemonPageData } from "../api/api";
import extractflavorText from "../helpers/extractFlavorText";
import PokemonStatContainer from "../components/pokemon/PokemonStatContainer";
import PokemonText from "../components/pokemon/PokemonText";
import PokemonPicture from "../components/pokemon/PokemonPicture";
import IconArrow from "../assets/IconArrow";
import PokemonEvolutions from "../components/pokemon/PokemonEvolutions";
import formatWord from "../helpers/formatWord";
import formatMeasurement from "../helpers/formatMeasurement"
import PokemonMovePage from "../components/pokemon/PokemonMovePage";

export default function Pokemon(props) {
  const { pokemonid } = useParams();
  // const pokemon = props.data[pokemonid - 1];
  const [pokemonInfo, setPokemonInfo] = useState({})
  console.log(pokemonInfo);

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



    return (
      <Container>
        <Title className={`capitalize mb-14 text-2xl text-white`}>{pokemonInfo.name} {formatDex(pokemonInfo.id)}</Title>
        <div className="flex flex-col gap-y-12 justify-between items-center mb-12 md:mb-24 lg:flex-row">
          <PokemonPicture sprite={pokemonInfo.sprites.other['official-artwork'].front_default} alt={pokemonInfo.name} />
          <PokemonText className="text-center">{extractflavorText(pokemonInfo.flavor_text_entries)}</PokemonText>
        </div>
        <div className="flex flex-col gap-y-12 justify-evenly mb-12 md:mb-24 md:flex-row">
            {/*  */}
            <div className="flex-1">
              {/* <SubTitle className="text-left">Stats</SubTitle> */}
              <PokemonStatContainer stats={pokemonInfo.stats} type={pokemonInfo.types[0].type.name} />
            </div>

            {/* Stats Group 1 */}
            <div className="flex flex-col flex-1 gap-y-12">
              {/* Type */}
              <div>
                <SubTitle className="text-center">Type</SubTitle>
              <div className="flex gap-x-2 justify-center">
                {
                  pokemonInfo.types.map(({type}) => <Type className="max-w-[180px]" value={type.name} />)
                }
                  {/* <Type className="max-w-[180px]" value="grass" />
                  <Type className="max-w-[180px]" value="poison" /> */}
                </div>
              </div>
              {/* Abilities */}
              <div>
                <SubTitle className="text-center">Abilities</SubTitle>
              <div className="flex flex-col gap-2 justify-center items-center">
                {
                  pokemonInfo.abilities.map(({ability}) => {
                    const classes = "text-lg font-medium text-white dark:text-dark-text"
                    return <div className={classes}>{formatWord(ability.name)}</div>

                  })
                }
                </div>
              </div>

              {/* Growth */}
              <div>
                <SubTitle className="text-center">Growth</SubTitle>
                <div className="flex gap-x-2 justify-center">
                <div className="text-lg font-medium text-white dark:text-dark-text">{formatWord(pokemonInfo.growth_rate.name)}</div>
                </div>
              </div>
            </div>

        </div>
        {/* evolutions */}
        <div className="mb-24">
          <SubTitle className="text-center">Evolutions</SubTitle>
          <PokemonEvolutions evolutions={pokemonInfo.evolutionInfo} id={pokemonInfo.id} />
        </div>
        
        {/* additional info */}
        <div className={`grid grid-cols-1 gap-6 p-4 mb-12 border-4 border-white dark:border-dark-bg bg-type-${pokemonInfo.types[0].type.name}`}>
          
          <div className="grid grid-cols-2">
            <div className="flex flex-col items-center">
              <SubTitle className="text-white no-underline">Height</SubTitle>
              <div className="text-white">{formatMeasurement(pokemonInfo.height)} m</div>
            </div>
            <div className="flex flex-col items-center">
              <SubTitle className="text-white no-underline">Weight</SubTitle>
              <div className="text-white">{formatMeasurement(pokemonInfo.weight)} kg</div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex flex-col items-center">
              <SubTitle className="text-white no-underline">Base Happiness</SubTitle>
              <div className="text-white">{pokemonInfo.base_happiness}</div>
            </div>
            <div className="flex flex-col items-center">
              <SubTitle className="text-white no-underline">Base Experience</SubTitle>
              <div className="text-white">{pokemonInfo.base_experience}</div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex flex-col items-center">
              <SubTitle className="text-white no-underline">Capture Rate</SubTitle>
              <div className="text-white">{pokemonInfo.capture_rate}</div>
            </div>
            <div className="flex flex-col items-center">
              <SubTitle className="text-white no-underline">Color</SubTitle>
              <div className="text-white">{formatWord(pokemonInfo.color.name)}</div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex flex-col items-center">
              <SubTitle className="text-white no-underline">Egg Groups</SubTitle>
                {
                pokemonInfo.egg_groups.map(group => <div className="text-white">{formatWord(group.name)}</div>)
                }
            </div>
            <div className="flex flex-col items-center">
              <SubTitle className="text-white no-underline">Habitat</SubTitle>
              <div className="text-white">
                {pokemonInfo.habitat ? formatWord(pokemonInfo.habitat.name) : "Unknown"}
              </div>
            </div>
          </div>
        </div>

      {/* Next / Prev Entry */}
        <div className="flex justify-between">
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
