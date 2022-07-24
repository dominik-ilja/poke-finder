import SubTitle from "../ui/SubTitle";
import formatWord from "../../helpers/formatWord";

const classes = "grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 mb-12 border-4 border-white";
const darkClasses = "dark:border-dark-bg"

export default function PokemonAdditionalInfo(props) {
  const mappedInfo = props.info.map(el => {
    let value = null;

    if (Array.isArray(el.value)) {
      value = el.value.map(el => <div>{formatWord(el.name)}</div>)
    } else {
      value = formatWord(el.value);
    }

    return (
      <div className="flex flex-col items-center">
        <SubTitle className="text-white underline">{el.title}</SubTitle>
        <div className="text-white">{value}</div>
      </div>
    )
  })

  return (
    <div className={`${classes} ${darkClasses} bg-type-${props.type}`}>
      {mappedInfo}
    </div>
  );
};
