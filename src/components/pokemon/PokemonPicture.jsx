const classes = "overflow-hidden relative p-12 rounded-full shadow-[0_0_15px_3px] shadow-white";
const darkClasses = "dark:shadow-yellow-200";
const bgClasses = "absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-white opacity-25 blur-3xl"

export default function PokemonPicture(props) {
  return (
    <div className={`${classes} ${darkClasses} ${props.className || ""}`}>
      <img className="relative z-10 max-h-64" src={props.sprite} alt={props.alt} />
      <div className={bgClasses}></div>
    </div>
  );
};
