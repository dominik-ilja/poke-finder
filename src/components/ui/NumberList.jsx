const classes = "lg:text-xl list-decimal list-outside mb-5 md:text-lg pl-4 text-light-text"
const darkClasses = "dark:text-dark-text";

export default function NumberList(props) {
  return (
    <ol
      className={`${classes} ${darkClasses} ${props.className || ""}`}
    >
      {props.children}
    </ol>
  );
}
