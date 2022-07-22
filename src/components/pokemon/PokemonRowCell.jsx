const classes = "flex items-center justify-center text-xs xs:text-sm sm:text-base"

export default function PokemonRowCell(props) {
  return (
    <div className={`${classes} ${props.className || ""}`}>{props.children}</div>
  );
};
