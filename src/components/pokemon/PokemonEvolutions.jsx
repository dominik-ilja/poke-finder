import { useEffect, useState } from "react";
import IconArrow from "../../assets/IconArrow";

export default function PokemonEvolutions(props) {
  const evolutions = props.evolutions;
  console.log(props);

  // determine what stage of the evolution the pokemon is
  
  // 1. get the pokemon from it's evolutions
  const pokemon = evolutions.find(evo => evo.id === props.id);

  // 2. seperate the different stages
  const stages = {};

  evolutions.forEach(evo => {
    if (stages[evo.stage]) {
      stages[evo.stage].push(evo)
    } else {
      stages[evo.stage] = [evo]
    }
  })
  
  console.log(stages);
  console.log(pokemon);
  
  // we now want to render one of each stage. we want to create an element for each pokemon
  // but only show one of whichever stage has multiple evolutions. IF it has multiple evolutions
  let hasMultipleStages = false;

  for (let key in stages) {
    if (stages[key].length > 1) {
      hasMultipleStages = true;
    }
  }

  console.log(hasMultipleStages);


  if (hasMultipleStages) {
    const keys = Object.keys(stages);

    const evos = keys.map((key, index) => {
      const stage = stages[key];

      const images = stage.map(mon => {
        const { data, name } = mon;
        const sprite = data.sprites.other['official-artwork'].front_default;
        return <img className="max-w-[250px] w-full" src={sprite} alt={name} />;
      })

      console.log(images);

      const classes = `grid grid-cols-${Math.min(images.length, 2)} md:grid-cols-${Math.min(images.length, 4)}`

      return (
        <>
          <div className={`${classes} justify-items-center`}>{images}</div>
          {
            index < keys.length - 1 && (
              <div className="flex justify-center my-8">
                <IconArrow className="text-white rotate-90 min-w-8 max-w-[36px]" />
              </div>
            )
          }
        </>
      )

    })
    
    return <div>{evos}</div>
    }
  else {
    const keys = Object.keys(stages);
    const mappedStages = keys.map((key, index) => {
      const { data, name } = stages[key][0];
      const sprite = data.sprites.other['official-artwork'].front_default;

      return (
        <>
          <img className="max-w-[250px] w-full" src={sprite} alt={name} />
          {
            index < keys.length - 1 && (
              <IconArrow className="text-white sm:rotate-0 rotate-90 min-w-8 max-w-[36px]" />
            )
          }
        </>
      )
    })

    return (
      <div className="flex flex-col flex-shrink gap-4 justify-center items-center sm:flex-row">
        {mappedStages}
      </div>
    )
  }

};
