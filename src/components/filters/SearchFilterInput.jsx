const classes = "py-1 pl-10 w-full rounded-md bg-dark text-light-text";
const darkClasses = "dark:bg-dark-bg dark:text-palette-secondary";

export default function SearchFilterInput({className, id, onChange, ...props}) {
  return (
    <input
      className={`${classes} ${darkClasses} ${className || ""}`}
      name={id}
      id={id}
      placeholder="search"
      type="text"
      onChange={e => onChange(e.target.value)}
      {...props}
    />
  );
};
