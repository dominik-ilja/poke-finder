const darkClasses = "dark:text-dark-text"
const classes = "md:text-lg lg:text-xl mb-5 text-light-text"

export default function Text(props) {
  return (
    <p className={`${classes} ${darkClasses} ${props.className || ""}`}>
      {props.children}
    </p>
  );
}
