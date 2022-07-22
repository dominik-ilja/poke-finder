import TypeFilterClear from "./TypeFilterClear";
import TypeSelect from "./TypeSelect";
import { v4 as uuid } from "uuid";
import { pokemonTypes } from "../../data/pokemonInfo"

// const classes = "grid grid-cols-3 sm:grid-cols-4 gap-2 justify-items-center mb-12"
const classes = "flex gap-2 justify-center flex-wrap mb-12"


export default function TypeFilter(props) {
  const mappedTypeSelects = pokemonTypes.map(type => {
    return <TypeSelect className="w-full max-w-[120px]" value={type} key={uuid()} onClick={props.onClick} />
  })
  
  return (
    <>
      <div className={`${classes} ${props.classes || ""}`}>
        
        {mappedTypeSelects}
        
      </div>
        { props.selection && (
          <div className="flex justify-center mb-12">
            <TypeFilterClear
            className=""
            type={props.selection}
            onClick={() => props.onClick(null)}
            />
          </div>
        )
        }
    </>
  );
};
