const classes = "p-8 max-w-lg text-xl sm:text-2xl font-medium bg-white bg-opacity-25 border-4";
const darkClasses = "dark:bg-opacity-75 dark:bg-dark-bg dark:text-dark-title dark:border-dark-bg";

export default function PokemonText(props) {
  return (
    <p className={`${classes} ${darkClasses} ${props.className || ""}`}>
      {props.children}
    </p>
  );
};
