import SubTitle from "../ui/SubTitle";
import Type from "../ui/Type";
import formatWord from "../../helpers/formatWord";

const abilityClasses = "text-lg font-medium text-white dark:text-dark-text";

export default function PokemonMainInfo(props) {
  const mappedTypes = props.types.map(({ type }) => {
    return <Type className="max-w-[180px]" value={type.name} />
  })
  const mappedAbilities = props.abilities.map(({ ability }) => {
    return <div className={abilityClasses}>{formatWord(ability.name)}</div>
  })
  
  return (
    <div className="flex flex-col flex-1 gap-y-12">
      {/* Types */}
      <div>
        <SubTitle className="text-center">Type</SubTitle>
        <div className="flex justify-center gap-x-2">
          {mappedTypes}
        </div>
      </div>

      {/* Abilities */}
      <div>
        <SubTitle className="text-center">Abilities</SubTitle>
        <div className="flex flex-col items-center justify-center gap-2">
          { mappedAbilities }
        </div>
      </div>

      {/* Growth */}
      <div>
        <SubTitle className="text-center">Growth</SubTitle>
        <div className="text-lg font-medium text-center text-white dark:text-dark-text">
          {formatWord(props.growth)}
        </div>
      </div>
    </div>
  );
};
