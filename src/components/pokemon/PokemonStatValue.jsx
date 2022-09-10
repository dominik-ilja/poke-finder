const classes = "flex flex-col py-2 px-6 bg-gray-50 text-center font-semibold";
const darkClasses = "dark:bg-dark-bg dark:text-dark-text";

export default function PokemonStatValue(props) {
  return (
    <div className={`${classes} ${darkClasses} ${props.className}`}>
      <div className="uppercase">{props.stat}</div>
      <div>{props.value}</div>
    </div>
  );
};
