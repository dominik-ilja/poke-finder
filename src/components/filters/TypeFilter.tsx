import { v4 as uuid } from "uuid";
import TypeSelect from "./TypeSelect";
import { pokemonTypes } from "../../data/pokemonInfo";

type Props = {
  onClick: (type: PokemonType | null) => void;
  selection: string | null;
};

const TypeFilter = (props: Props) => {
  const TypeSelects = pokemonTypes.map(type => (
    <TypeSelect className="w-full max-w-[120px]"
      value={type}
      key={uuid()}
      onClick={props.onClick}
    />
  ));

  return (
    <>
      <div className={`flex gap-2 justify-center flex-wrap mb-12`}>
        {TypeSelects}
      </div>

      {props.selection && (
        <div className="flex justify-center mb-12">
          <button className={`border-type-${props.selection} bg-type-${props.selection} border-2 capitalize hover:-translate-y-1 transition-all p-2 rounded-md text-palette-white`}
            onClick={() => props.onClick(null)}
          >
            {`Clear ${props.selection} Filter`}
          </button>
        </div>
      )
      }
    </>
  );
};

export default TypeFilter;
