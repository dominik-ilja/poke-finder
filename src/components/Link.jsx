export default function Link(props) {
  return (
    <a
      className={`text-link hover:text-primary focus:text-primary transition-colors`}
      href={props.href}
    >
      {props.children}
    </a>
  );
}
