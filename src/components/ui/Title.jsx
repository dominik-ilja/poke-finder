const darkClasses = "dark:text-dark-title"
const classes = "mb-5 text-xl xs:text-2xl sm:text-4xl md:text-5xl font-semibold text-center"

export default function Title(props) {

  return (
    <h1
      className={`${classes} ${darkClasses} ${props.className}`}
    >
      {props.children}
    </h1>
  );
}
