const classes = "text-palette-link hover:text-palette-primary focus-visible:text-palette-primary transition-colors";
const darkClasses = "dark:text-palette-secondary dark:hover:text-palette-white dark:focus-visible::text-palette-white";

export default function Link(props) {
  return (
    <a className={`${classes} ${darkClasses} ${props.className}`} href={props.href}>
      {props.children}
    </a>
  );
};
