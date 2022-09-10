const classes = "mb-3 text-2xl md:text-2xl font-semibold under";
const darkClasses = "dark:text-dark-title";

export default function SubTitle(props) {
  return (
    <h2 className={`${classes} ${darkClasses} ${props.className || ""}`}>
      {props.children}
    </h2>
  );
}
